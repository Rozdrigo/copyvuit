import axios from "axios";
import appconfig from "../../appconfig.json";

const api = axios.create({
  baseURL: appconfig.baseApi
})

export default api;