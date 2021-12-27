const GET = (path, token = null) => {
  const headers = {
    headers: {
      accept: "application/json, text/plain, */*",
    },
  };
  if (token) {
    headers.headers.authorization = `Bearer ${token}`;
  }
  return fetch(`${process.env.APP_BACKEND_URL}${path}`, headers)
    .then((response) => response.json())
    .then((response) => response);
};

const POST = (path, body, token = null) => {
  const headers = {
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
    method: "POST",
  };
  if (token) {
    headers.headers.authorization = `Bearer ${token}`;
  }
  return fetch(`${process.env.APP_BACKEND_URL}${path}`, headers)
    .then((response) => response.json())
    .then((response) => response);
};

export { GET, POST };
