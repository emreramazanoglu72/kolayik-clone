const GET = (path, token = null) => {
  const headers = {
    headers: {
      accept: "application/json, text/plain, */*",
    },
  };
  if (token) {
    headers.headers.authorization = `Bearer ${token}`;
  }
  return fetch(`${process.env.APP_URL}${path}`, headers)
    .then((response) => response.json())
    .then((response) => response);
};

const POST = (path, body) => {
  const headers = {
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
    method: "POST",
  };
  return fetch(`${process.env.APP_URL}${path}`, headers)
    .then((response) => response.json())
    .then((response) => response);
};

export { GET, POST };
