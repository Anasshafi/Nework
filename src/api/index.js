import axios from "axios";

const API_ENDPOINT = "http://localhost:3300/api";
const useAPI = () => {
  const token = JSON.parse(localStorage.getItem("user")).token;
  return {
    GET: async (route) =>
      await axios.get(`${API_ENDPOINT}/${route}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    POST: async (route, data) =>
      await axios.post(`${API_ENDPOINT}/${route}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
  };
};

export default useAPI;
