export interface DidParts {
  block: number;
  txIndex: number;
}

export function validateDid(did: string): boolean {
  if (!did || typeof did !== "string") return false;
  if (!did.startsWith("did:alkid:")) return false;

  const parts = did.split(":");
  if (parts.length !== 4) return false;

  const block = Number(parts[2]);
  const txIndex = Number(parts[3]);

  if (Number.isNaN(block) || Number.isNaN(txIndex)) return false;
  if (block < 0 || txIndex < 0) return false;

  return true;
}

export function parseDid(did: string): DidParts {
  if (!validateDid(did)) {
    throw new Error(`Invalid AlkID DID: ${did}`);
  }

  const parts = did.split(":");
  return {
    block: Number(parts[2]),
    txIndex: Number(parts[3]),
  };
}

export function generateDid(block: number, txIndex: number): string {
  if (block < 0 || txIndex < 0) {
    throw new Error("Block and txIndex must be non-negative integers");
  }
  return `did:alkid:${block}:${txIndex}`;
}

export function isDid(value: any): value is string {
  return typeof value === "string" && validateDid(value);
}
