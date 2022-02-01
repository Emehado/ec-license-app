import { create } from "apisauce";

const token = localStorage.getItem("token");

// baseURL: 'https://energycommissionbackend.herokuapp.com/',
const api = create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://www.energycom.ghwebs.com/api"
      : "http://localhost:9006/api",
  headers: { Authorization: `Bearer ${token}` },
});

export default api;
