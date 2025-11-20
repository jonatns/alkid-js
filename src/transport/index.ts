export interface Transport {
  url: string;
  request(method: string, params?: any[]): Promise<any>;
}

export * from "./rpc";