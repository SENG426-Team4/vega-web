import { UserProvider } from "../auth/UserProvider.js";

function getUserToken() {
  return UserProvider;
}

export async function handleResponse(response, isBlob = false) {
  let result;
  if (isBlob) {
    result = await response.blob();
  } else {
    result = handleResult(await response.text());
  }
  if (response.ok) {
    console.log("RESPONSE OK", result);
    return result;
  }
  // handle error
  return Promise.reject({
    code: response.status,
    message: result && result.message ? result.message : response.statusText,
  });
}

export async function doGet(url, token) {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return await handleResponse(response);
}

export async function doDelete(url, data, token) {
  console.log("GETTING TO DELETE", data);
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(data),
  });
  return await handleResponse(response);
}

export async function doPut(url, data, token) {
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authentication: "Bearer " + token,
    },
    body: JSON.stringify(data),
  });
  return await handleResponse(response);
}

export async function doPost(url, data, token) {
  console.debug("Request data:", data, url, token);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authentication: "Bearer " + token,
    },
    body: JSON.stringify(data),
  });
  return await handleResponse(response);
}

export async function doPostFile(url, data, token) {
  console.log(getUserToken());
  console.debug("Request data:", data);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
    },
    body: data,
  });

  return await handleResponse(response);
}

function handleResult(value) {
  try {
    return JSON.parse(value);
  } catch (error) {
    return value;
  }
}
