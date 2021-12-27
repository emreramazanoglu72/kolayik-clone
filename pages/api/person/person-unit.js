import { GET } from "/services/api_backend";
import Cookies from "cookies";

const personUnit = async (req, res) => {
  const cookies = new Cookies(req, res);
  const authenticate = JSON.parse(cookies.get("authenticate"));
  const token = authenticate.data.auth_token;
  const { personId } = req.body;
  const response = await GET(`/person-unit/list/${personId}`, token);
  res.status(200).json(response);
};

export default personUnit;
