import { POST } from "/services/api_backend";
import Cookies from "cookies";

const handler = async (req, res) => {
  const { username, password } = req.body;
  const cookies = new Cookies(req, res);

  const response = await POST("/public/authenticate", {
    username,
    password,
  });
  cookies.set("authenticate", JSON.stringify(response), {
    httpOnly: true, // true by default
  });
  cookies.set("token", response.data.auth_token, {
    httpOnly: true, // true by default
  });
  res.status(200).json(response);
};

export default handler;
