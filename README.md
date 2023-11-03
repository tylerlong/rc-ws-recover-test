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