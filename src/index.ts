import RingCentral from '@rc-ex/core';
import waitFor from 'wait-for-async';
import WS from 'ws';
// import hyperid from 'hyperid';
// import waitFor from 'wait-for-async';

// const uuid = hyperid();

const rc = new RingCentral({
  server: process.env.RINGCENTRAL_SERVER_URL,
  clientId: process.env.RINGCENTRAL_CLIENT_ID,
  clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
});

const main = async () => {
  await rc.authorize({ jwt: process.env.RINGCENTRAL_JWT_TOKEN! });
  const r = await rc.post('/restapi/oauth/wstoken');
  const wsToken = r.data as { uri: string; ws_access_token: string };

  const wsUri = `${wsToken.uri}?access_token=${wsToken.ws_access_token}`;
  const ws = new WS(wsUri);
  let wscToken = '';
  ws.addEventListener('message', (e) => {
    console.log(JSON.stringify(JSON.parse(e.data as string), null, 2));
    const message = e.data as string;
    if (message.includes('"ConnectionDetails"')) {
      wscToken = JSON.parse(message)[0].wsc.token;
    }
  });
  await waitFor({ interval: 1000, condition: () => wscToken !== '' });
  ws.close();
  await waitFor({ interval: 5000 });
  const r2 = await rc.post('/restapi/oauth/wstoken');
  const wsToken2 = r2.data as { uri: string; ws_access_token: string };
  const wsUri2 = `${wsToken2.uri}?access_token=${wsToken2.ws_access_token}&wsc=${wscToken}`;
  const ws2 = new WS(wsUri2);
  ws2.addEventListener('message', (e) => {
    console.log(JSON.stringify(JSON.parse(e.data as string), null, 2));
  });
};

main();
