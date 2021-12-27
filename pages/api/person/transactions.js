import { POST } from "/services/api_backend";
import Cookies from "cookies";

const transactions = async (req, res) => {
  const cookies = new Cookies(req, res);
  const authenticate = JSON.parse(cookies.get("authenticate"));
  const token = authenticate.data.auth_token;
  const { limit, page } = req.query;
  const data = {
    startDate: null,
    endDate: null,
    params: { page, limit },
  };
  const response = await POST(`/v1_1/profile/transactions`, data, token);
  res.status(200).json(response);
};

export default transactions;
