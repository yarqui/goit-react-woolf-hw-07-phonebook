import axios from "axios";

const BASE_URL = "https://640c8642a3e07380e8f6ab1c.mockapi.io/api/v1";

const endpoints = Object.freeze({ contacts: "/contacts" });

axios.defaults.baseURL = BASE_URL;

export { endpoints };
export default axios;
