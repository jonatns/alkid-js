let _id = 0;
export function rpc(url, opts) {
    return {
        url,
        async request(method, params = []) {
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
            const json = await res.json();
            if (json.error) {
                throw new Error(json.error.message || "Unknown RPC error");
            }
            return json.result;
        }
    };
}
//# sourceMappingURL=rpc.js.map