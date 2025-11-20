import { DEFAULT_BASE_URL, ALKID_NAMESPACE } from "../constants";
import { StartOptions } from "./start";

export async function start(options: StartOptions): Promise<string> {
  if (!chrome?.identity?.launchWebAuthFlow) {
    throw new Error(
      "AlkID recovery requires chrome.identity.launchWebAuthFlow."
    );
  }

  const redirectUri =
    options.redirectUri ?? chrome.identity.getRedirectURL(ALKID_NAMESPACE);

  const authUrl = new URL(options.baseUrl ?? DEFAULT_BASE_URL);
  authUrl.searchParams.set("redirect_uri", encodeURIComponent(redirectUri));
  authUrl.searchParams.set("controller", options.controller);
  authUrl.searchParams.set("recovery", options.recovery);
  authUrl.searchParams.set("network", options.network ?? "mainnet");

  const responseUrl = await chrome.identity.launchWebAuthFlow({
    url: authUrl.href,
    interactive: true,
  });

  if (!responseUrl) throw new Error("No redirect URL returned from AlkID.");

  const url = new URL(responseUrl);
  const txid = url.searchParams.get("tx");

  if (!txid) throw new Error("Missing tx from AlkID redirect.");

  return txid;
}
