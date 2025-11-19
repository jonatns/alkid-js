export function isChromeExtension(): boolean {
  return (
    typeof chrome !== "undefined" &&
    !!chrome.identity &&
    typeof chrome.identity.launchWebAuthFlow === "function"
  );
}
