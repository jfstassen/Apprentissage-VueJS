import axios from "axios";
// Auth API
const instance = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1"
})

// instance.defaults.headers.common["SOMETHING"] = "something"
// instance.defaults.headers.common['Content-Type'] = "application/json";
export default instance