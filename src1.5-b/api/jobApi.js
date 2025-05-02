import axios from "axios";

const API_BASE = "http://localhost:8080/api/employers";

const authHeader = () => ({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  
  export const getJobs = async () => {
    const token = localStorage.getItem("token");
    console.log("getJobs: Gửi yêu cầu tới /my-jobs với token:", token);
    const res = await axios.get("http://localhost:8080/api/employers/my-jobs", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("getJobs: Nhận được phản hồi từ /my-jobs:", res.data);
    return res;
  };
export const createJob = (job) => axios.post(`${API_BASE}/my-jobs`, job, authHeader());
export const updateJob = (id, job) => axios.put(`${API_BASE}/my-jobs/${id}`, job, authHeader());
export const deleteJob = (id) => axios.delete(`${API_BASE}/my-jobs/${id}`, authHeader());