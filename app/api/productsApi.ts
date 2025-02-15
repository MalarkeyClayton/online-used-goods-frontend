
import axios from "axios";

export const getProducts = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

