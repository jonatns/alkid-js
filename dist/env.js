export function isChromeExtension() {
    return (typeof chrome !== "undefined" &&
        !!chrome.identity &&
        typeof chrome.identity.launchWebAuthFlow === "function");
}
//# sourceMappingURL=env.js.map