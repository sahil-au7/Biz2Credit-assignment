import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api/v1",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchUser = () => API.get("/user");
export const createUser = (newUser) => API.post("/user", newUser);
export const updateUser = (id, updatedUser) =>
  API.patch(`/user/${id}`, updatedUser);
export const deleteUser = (id) => API.delete(`/user/${id}`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
