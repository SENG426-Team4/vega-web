import { doPost, doGet } from "./HTTPRequestAPI.js";

export function createSecret(url, data, headers) {
  console.log("Create Secret", url, data, headers);
  return doPost(url, data, headers);
}
export function readSecret(url, headers) {
  console.log(headers);
  return doGet(url, headers["authorization"]);
}
