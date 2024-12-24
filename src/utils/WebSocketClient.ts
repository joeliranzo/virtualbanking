export class WebSocketClient {
    private static instance: WebSocketClient;
    private socket: WebSocket | null = null;
    private listeners: ((message: string) => void)[] = [];

    private constructor() {}

    public static getInstance(): WebSocketClient {
        if (!WebSocketClient.instance) {
            WebSocketClient.instance = new WebSocketClient();
        }
        return WebSocketClient.instance;
    }

    public connect(url: string): void {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            console.log('WebSocket connection already established.');
            return;
        }

        this.socket = new WebSocket(url);

        this.socket.onopen = () => {
            console.log('WebSocket connection established.');
        };

        this.socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        this.socket.onmessage = (event) => {
            this.listeners.forEach(listener => listener(event.data));
        };
    }

    public sendMessage(message: string): void {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(message);
        } else {
            console.error('WebSocket is not open.');
        }
    }

    public addMessageListener(callback: (message: string) => void): void {
        this.listeners.push(callback);
    }

    public removeMessageListener(callback: (message: string) => void): void {
        this.listeners = this.listeners.filter(listener => listener !== callback);
    }
}