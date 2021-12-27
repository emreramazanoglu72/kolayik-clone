import { POST } from "/services/api_backend";
import Cookies from "cookies";

const newSearch = async (req, res) => {
  const cookies = new Cookies(req, res);
  const authenticate = JSON.parse(cookies.get("authenticate"));
  const token = authenticate.data.auth_token;
  const { page, q } = req.body;
  const response = await POST(
    "/person/new-search",
    {
      page: page || 1,
      q: q || "",
      status: 1,
    },
    token
  );
  const newList = Object.keys(response.items);
  const _response = [];
  newList.map((item) => {
    _response.push(response.items[item]);
  });
  res
    .status(200)
    .json({
      searchRecords: newList.length,
      totalCount: response.totalCount,
      resultSet: _response,
    });
};

export default newSearch;
