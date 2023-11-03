# RingCentral WebSocket Recover Test


## Experiment 1

1. Connect to WS
2. Save the wsc token. 
3. Disconnect 
4. Reconnect with the wsc token

"recoveryState": "Failed",
"recoveryErrorCode": "WSG-1005",

原因是找不到这个 ws session 关联的 subscription id。


## Experiment 2

1. Connect to WS
2. Save the wsc token. 
3. Create a subscription
4. Disconnect 
5. Reconnect with the wsc token

