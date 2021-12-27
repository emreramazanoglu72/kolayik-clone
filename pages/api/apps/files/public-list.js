import { GET } from "/services/api_backend";
import Cookies from "cookies";

const publicList = async (req, res) => {
  const cookies = new Cookies(req, res);
  const authenticate = JSON.parse(cookies.get("authenticate"));
  const token = authenticate.data.auth_token;
  const response = await GET("/file/public-list", token);
  res.status(200).json(response);
};

export default publicList;
