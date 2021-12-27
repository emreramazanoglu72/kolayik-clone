import { GET } from "/services/api_backend";
import Cookies from "cookies";

const hierarchyTree = async (req, res) => {
  const cookies = new Cookies(req, res);
  const authenticate = JSON.parse(cookies.get("authenticate"));
  const token = authenticate.data.auth_token;
  const { companyId } = req.body;
  const response = await GET(`/company/hierarchy-tree/${companyId}`, token);
  res.status(200).json(response);
};

export default hierarchyTree;
