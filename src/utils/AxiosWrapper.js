import axios from "axios";

const getToken = () => localStorage.getItem("authToken");

let axiosWrapper = axios.create({
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*"
    }
});

axiosWrapper.interceptors.request.use(
    config => {
        if (!config.headers.token) {
            const token = getToken();
            if (token) {
                config.headers.Authorization = "Bearer " + token;
            }
        }
        return config;
    },
    error => Promise.reject(error)
);

export default axiosWrapper;
