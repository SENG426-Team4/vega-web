import { doPost, doGet, doPut, doDelete } from "../BaseAPI.js";

export function secretCreator(secretInfo, token) {
  console.log("Secret Creator", secretInfo, token);
  return doPost(
    `${
      process.env.REACT_APP_API_KEY || "http://localhost:8000/"
    }api/venus/vault/${secretInfo.userId}/create`,
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
  return doGet(`${
      process.env.REACT_APP_API_KEY || "http://localhost:8000/"
    }api/venus/vault/${userId}/read`, token);
}

export function secretReaderFiltered(userId, fromDate, toDate, token) {
  console.log("Secret Reader Filtered", fromDate, toDate);
  return doGet(
    `${process.env.REACT_APP_API_KEY || "http://localhost:8000/"}api/venus/vault/${userId}/read?from=${fromDate}&to=${toDate}`,
    token
  );
}

export function secretUpdate(newSecretInfo, token) {
  return doPut(
    `${
      process.env.REACT_APP_API_KEY || "http://localhost:8000/"
    }api/venus/vault/${newSecretInfo.username}/update`,
    newSecretInfo,
    token
  );
}

export function secretDelete(secret, token) {
  console.log("LET;s go secretdelete", secret);
  return doDelete(
    `${
      process.env.REACT_APP_API_KEY || "http://localhost:8000/"
    }api/venus/vault/${secret.username}/delete`,
    secret,
    token
  );
}

export function secretShare(secretShareInfo, token) {
  console.log("Secret Share", secretShareInfo);
  return doPut(
    `${process.env.REACT_APP_API_KEY || "http://localhost:8000/"}api/venus/vault/${secretShareInfo.username}/share`,
    secretShareInfo,
    token
  );
}
