import type { Transport } from "./index";

let _id = 0;

export function rpc(
  url: string,
  opts?: { headers?: Record<string, string> }
): Transport {
  return {
    url,

    async request(method: string, params: any[] = []) {
      const body = JSON.stringify({
        jsonrpc: "2.0",
        id: ++_id,
        method,
        params,
      });

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(opts?.headers ?? {})
        },
        body,
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${await res.text()}`);
      }

      const json = await res.json() as { error?: { message?: string }, result?: any };

      if (json.error) {
        throw new Error(json.error.message || "Unknown RPC error");
      }

      return json.result;
    }
  };
}
