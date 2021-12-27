import { GET } from "/services/api_backend";

const leaveStatus = async (req, res) => {
  const { id } = req.query;
  const { token } = req.body;
  const response = await GET(`/leave/status/${id}`, token);
  res.status(200).json(response);
};

export default leaveStatus;
