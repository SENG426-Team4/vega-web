import { doPost } from "../BaseAPI.js";

export function login(userInfo) {
  console.log("In Auth", userInfo);
  return doPost(
    `${process.env.REACT_APP_API_KEY || "http://localhost:8000/"}api/login`,
    userInfo
  );
}
