// pages/api/signin.ts
import type { NextApiRequest, NextApiResponse } from 'next';

interface User {
    email: string;
    password: string;
}

const users: User[] = [
    { email: 'test@example.com', password: 'password123' }, // Example user for testing
]; // This is a mock database array, use a real DB in production.

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        // Simple validation
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and Password are required' });
        }

        // Check if user exists
        const user = users.find((user) => user.email === email);

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        // Check if passwords match
        if (user.password !== password) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        // Respond with success (mock authentication, can return JWT token in production)
        return res.status(200).json({ message: 'Login successful' });
    } else {
        // Method Not Allowed
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
};

export default handler;
