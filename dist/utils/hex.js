export function reverseHex(hex) {
    if (hex.length % 2 !== 0) {
        throw new Error("Hex string must have an even number of characters");
    }
    const bytes = hex.match(/.{1,2}/g);
    if (!bytes)
        throw new Error("Invalid hex string");
    return bytes.reverse().join("");
}
//# sourceMappingURL=hex.js.map