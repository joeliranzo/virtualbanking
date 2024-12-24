import { WebSocketClient } from './WebSocketClient';

const client = WebSocketClient.getInstance();
client.connect('ws://localhost:9000');

export const sendMessage = (message: string) => {
    client.sendMessage(message);
};

export const onMessage = (callback: (message: string) => void) => {
    client.addMessageListener(callback);
};

export const offMessage = (callback: (message: string) => void) => {
    client.removeMessageListener(callback);
};