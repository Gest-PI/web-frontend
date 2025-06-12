import axios from "axios";
import { apiBaseUrl } from "../constants";

const axiosinstance = axios.create({
    baseURL: apiBaseUrl,
});

export const AuthService = {
    Login: async (username: string, password: string) => {
        return axiosinstance
            .post("/auth/login", {
                username,
                password,
            })
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                return error;
            });
    },
};
