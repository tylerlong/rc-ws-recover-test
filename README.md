# RingCentral WebSocket Recover Test


## Experiment 1

1. Connect to WS
2. Save the wsc token. 
3. Disconnect 
4. Reconnect with the wsc token

"recoveryState": "Failed",
"recoveryErrorCode": "WSG-1005",

Reason: server cannot find subscription id assocaited with ws session


## Experiment 2

1. Connect to WS
2. Save the wsc token. 
3. Create a subscription
4. Disconnect 
5. Reconnect with the wsc token

"recoveryState": "Successful"


## Experiment 3

1. Connect to WS
2. Save the wsc token. 
3. Create a subscription
4. Disconnect 
5. Reconnect with the wsc token AND and a **new** OAuth token/session

"recoveryState": "Failed",
"recoveryErrorCode": "WSG-1003",

I think it is because I tried to recover a WSC which is associated with a different OAuth session.


## Experiment 4

1. Connect to WS
2. Save the wsc token. 
3. Create a subscription
4. Disconnect 
5. Reconnect with the wsc token AND and a refreshed OAuth token (still the same session)
