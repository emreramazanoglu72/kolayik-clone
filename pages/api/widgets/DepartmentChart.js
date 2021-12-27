import { POST } from "/services/api_backend";
import Cookies from "cookies";

const DepartmentChart = async (req, res) => {
  const { unitId } = req.body;
  const cookies = new Cookies(req, res);
  const authenticate = JSON.parse(cookies.get("authenticate"));
  const token = authenticate.data.auth_token;
  const response = await POST("/widget/DepartmentChart", { unitId }, token);
  res.status(200).json(response);
};

export default DepartmentChart;
