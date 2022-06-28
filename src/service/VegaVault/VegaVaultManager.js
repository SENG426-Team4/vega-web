import { doPost, doGet } from "../BaseAPI.js";

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
