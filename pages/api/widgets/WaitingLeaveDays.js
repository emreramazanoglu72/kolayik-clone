import { POST } from "/services/api_backend";
import Cookies from "cookies";

const WaitingLeaveDays = async (req, res) => {
  const cookies = new Cookies(req, res);
  const authenticate = JSON.parse(cookies.get("authenticate"));
  const token = authenticate.data.auth_token;
  const { limit, page } = req.body;
  const response = await POST(
    "/widget/WaitingLeaveDays",
    { limit, page },
    token
  );
  res.status(200).json(response);
};

export default WaitingLeaveDays;
