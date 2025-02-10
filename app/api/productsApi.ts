// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "localhost:8001";
import axios from "axios";

export const getProducts = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

