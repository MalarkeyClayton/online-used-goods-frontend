
import axios from "axios";

export const userApi = async () => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

