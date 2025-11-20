import { validateDid } from "../utils/did";
import { generate as generateKeys } from "../keys";
import * as storage from "../storage";
import { ALKID_BASE_URL, ALKID_NAMESPACE } from "../constants";

export interface ChromeStartOptions {
  baseUrl?: string;
  network?: "mainnet" | "regtest";
}

export async function start(options?: ChromeStartOptions): Promise<string> {
  if (
    typeof chrome === "undefined" ||
    !chrome.identity ||
    typeof chrome.identity.launchWebAuthFlow !== "function"
  ) {
    throw new Error(
      "AlkID recovery requires chrome.identity.launchWebAuthFlow. " +
        "This method can only be used inside a Chrome extension."
    );
  }

  const { controllerPub, controllerPriv, recoveryPub, recoveryPriv } =
    await generateKeys();

  await storage.setControllerKey(controllerPriv);
  await storage.setRecoveryKey(recoveryPriv);

  const redirectUri = chrome.identity.getRedirectURL(ALKID_NAMESPACE);

  const authUrl = new URL(options?.baseUrl ?? ALKID_BASE_URL);
  authUrl.searchParams.set("redirect_uri", encodeURIComponent(redirectUri));
  authUrl.searchParams.set("controller", controllerPub);
  authUrl.searchParams.set("recovery", recoveryPub);
  authUrl.searchParams.set("network", options?.network ?? "mainnet");

  const responseUrl = await chrome.identity.launchWebAuthFlow({
    url: authUrl.href,
    interactive: true,
  });

  if (!responseUrl) {
    throw new Error("AlkID did not return a redirect URL.");
  }

  const url = new URL(responseUrl);
  const did = url.searchParams.get("did");

  if (!did || !validateDid(did)) {
    throw new Error("Invalid DID returned from AlkID.");
  }

  await storage.setDid(did);

  return did;
}
