import { POST } from "/services/api_backend";
import { createDateString } from "/utils";
import Cookies from "cookies";

const UpcomingBirthday = async (req, res) => {
  const cookies = new Cookies(req, res);
  const authenticate = JSON.parse(cookies.get("authenticate"));
  const token = authenticate.data.auth_token;
  const { limit, page } = req.body;
  const date = new Date();
  const startDate = createDateString(date);
  const endDate = createDateString(
    new Date(date.setMonth(date.getMonth() + 1))
  );
  const response = await POST(
    "/widget/UpcomingBirthday",
    { limit, page, startDate, endDate },
    token
  );
  res.status(200).json(response);
};

export default UpcomingBirthday;
