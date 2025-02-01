import { Todo } from "@/types/type";
import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8001";

const todoApi = {
    getTodos: async () => {
        console.log(baseUrl);
        const response = await axios.get(`${baseUrl}/test`);
        return response.data;
    },
    createTodo: async (todo: Todo) => {
        const response = await axios.post(`${baseUrl}/test`, todo);
        return response.data;
    },
    updateTodo: async (todo: Todo) => {
        const response = await axios.put(`${baseUrl}/test/${todo._id}`, todo);
        return response.data;
    },
    deleteTodo: async (id: string) => {
        const response = await axios.delete(`${baseUrl}/test/${id}`);
        return response.data;
    }
};

export default todoApi;
