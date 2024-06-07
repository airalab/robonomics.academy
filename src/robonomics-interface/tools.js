import { hexToU8a, u8aToString } from "@polkadot/util";
import { decodeAddress } from "@polkadot/util-crypto";
import { createPair, encryptor } from "./encryptor";

const getLastIndex = async (robonomics, address) => {
  const id = await robonomics.datalog.getLastId(address);
  return id.id;
};
export const getLastDatalog = async (robonomics, address) => {
  const lastIndex = await getLastIndex(robonomics, address);
  if (lastIndex !== null && lastIndex >= 0) {
    const last = await robonomics.datalog.readByIndex(address, lastIndex);
    return { timestamp: last[0].toNumber(), cid: u8aToString(last[1]) };
  }
  return false;
};
export const decryptMsg = (encryptedMsg, account, controller) => {
  try {
    const seed = account.decryptMessage(
      hexToU8a(encryptedMsg.encrypted_keys[account.address]),
      decodeAddress(controller)
    );
    const admin = encryptor(createPair(u8aToString(seed)));
    const data = admin.decryptMessage(
      hexToU8a(encryptedMsg.data),
      decodeAddress(controller)
    );
    return data;
  } catch (error) {
    console.log(error.message);
  }
  return false;
};
const fetchTimeout = (url, ms, { signal, ...options } = {}) => {
  const controller = new AbortController();
  const promise = fetch(url, { signal: controller.signal, ...options });
  if (signal) signal.addEventListener("abort", () => controller.abort());
  const timeout = setTimeout(() => controller.abort(), ms);
  return promise.finally(() => clearTimeout(timeout));
};
export const getData = async (
  robonomics,
  account,
  gateway = "https://ipfs.io/ipfs/"
) => {
  const result = await getLastDatalog(robonomics, account);
  const response = await fetchTimeout(`${gateway}${result.cid}`, 30000);
  if (response.ok) {
    return await response.json();
  } else {
    console.log("Ошибка HTTP: " + response.status);
  }
  return false;
};
