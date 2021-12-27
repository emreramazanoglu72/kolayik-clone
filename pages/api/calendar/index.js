import { GET } from "/services/api_backend";
import Cookies from "cookies";

const leaveDays = async (req, res) => {
  const cookies = new Cookies(req, res);
  const authenticate = JSON.parse(cookies.get("authenticate"));
  const token = authenticate.data.auth_token;
  const { start, end } = req.body;
  const response = await GET(`/calendar/${start}/${end}`, token);
  res.status(200).json(response);
};

export default leaveDays;
