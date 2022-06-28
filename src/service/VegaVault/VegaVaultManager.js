import { doPost, doGet, doPut, doDelete } from "../BaseAPI.js";

export function secretCreator(secretInfo, token) {
  console.log("Secret Creator", secretInfo, token);
  return doPost(
    `http://localhost:8000/api/venus/vault/${secretInfo.userId}/create`,
    {
      username: secretInfo.userId,
      name: secretInfo.secretName,
      data: secretInfo.secretValue,
      timeCreated: new Date().toISOString(),
    },
    token
  );
}

export function secretReader(userId, token) {
  console.log("fetchFiles", token);
  return doGet(`http://localhost:8000/api/venus/vault/${userId}/read`, token);
}

export function secretUpdate(newSecretInfo, token) {
  return doPut(
    `http://localhost:8000/api/venus/vault/${newSecretInfo.username}/update`,
    newSecretInfo,
    token
  );
}

export function secretDelete(secret, token) {
  console.log("LET;s go secretdelete", secret);
  return doDelete(
    `http://localhost:8000/api/venus/vault/${secret.username}/delete`,
    secret,
    token
  );
}
