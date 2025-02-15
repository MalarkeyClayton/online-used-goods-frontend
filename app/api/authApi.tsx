const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8001";
import axios from "axios";
import { User } from "@/types/user";

const authApi = {
    register: async (todo: User) => {
        const response = await axios.post(`${baseUrl}/api/auth/signup`, todo);
        return response.data;
    },
    login: async (todo: {email: String; password:String }) => {
        const response = await axios.post(`${baseUrl}/api/auth/signin`, todo);
        return response.data;
    },

};

export default authApi;
