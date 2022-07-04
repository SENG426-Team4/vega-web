import { doPost, doGet, doPut, doDelete } from "./HTTPRequestAPI.js";

export function createSecret(url, data, headers) {
  console.log("Create Secret", url, data, headers);
  return doPost(url, data, headers);
}
export function readSecret(url, headers) {
  return doGet(url, headers["authorization"]);
}

export function updateSecret(url, newData, headers) {
  if (
    newData.name &&
    newData.username &&
    (newData.newData || newData.newName)
  ) {
    return doPut(url, newData, headers["authorization"]);
  }
}

export function deleteSecret(url, data, headers) {
  return doDelete(url, data, headers["authorization"]);
}

export function shareSecret(url, data, headers) {
  return doPut(url, data, headers);
}
