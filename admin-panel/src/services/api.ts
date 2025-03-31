import axios from "axios";

const API_BASE = "https://gutu.bikilaketema.com";

const api = axios.create({
  baseURL: API_BASE,
});

export const loginAdmin = async (username: string, password: string) => {
  const res = await api.post("api/admin/login", { username, password });
  return res.data;
};

export const getSchools = async (token: string) => {
  const res = await api.get("api/schools", { headers: { Authorization: `Bearer ${token}` } });
  return res.data;
};

export const getTeachers = async (token: string) => {
  const res = await api.get("api/teachers", { headers: { Authorization: `Bearer ${token}` } });
  return res.data;
};
