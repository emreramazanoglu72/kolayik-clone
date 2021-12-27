import { GET } from "/services/api_backend";
import Cookies from "cookies";

const trainings = async (req, res) => {
  const cookies = new Cookies(req, res);
  const authenticate = JSON.parse(cookies.get("authenticate"));
  const token = authenticate.data.auth_token;
  const response = await GET(`/profile/trainings`, token);
  res.status(200).json(response);
};

export default trainings;
