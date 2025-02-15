
import axios from "axios";

export const getCategories = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`);  
        return response.data;
    } catch (error) {
        console.log(error);
    }
}