import { GET } from "/services/api_backend";
import Cookies from "cookies";

const myInfo = async (req, res) => {
  const cookies = new Cookies(req, res);
  const authenticate = JSON.parse(cookies.get("authenticate"));
  const token = authenticate.data.auth_token;
  const response = await GET("/init", token);
  cookies.set("personId", response.data.user.id, {
    httpOnly: true, // true by default
  });
  res.status(200).json(response);

};

export default myInfo;
