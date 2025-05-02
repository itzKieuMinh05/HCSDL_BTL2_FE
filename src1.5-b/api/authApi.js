import axios from "axios";

const API_BASE = "http://localhost:8080/api";

export const login = ({username, password}) => {
  return axios.post(`${API_BASE}/auth/login`, {
    username,
    password,
    userType: "EMPLOYER"
  });
};
