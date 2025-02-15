// pages/api/signup.ts
import type { NextApiRequest, NextApiResponse } from 'next';

interface User {
    email: string;
    password: string;
}

const users: User[] = []; // This is a mock database array, use a real DB in production.

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        // Simple validation
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and Password are required' });
        }

        // Check if user already exists (mock check)
        const userExists = users.find((user) => user.email === email);
        if (userExists) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Save the user (mock saving to the array)
        users.push({ email, password });

        // Respond with success
        return res.status(201).json({ message: 'User registered successfully' });
    } else {
        // Method Not Allowed
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
};

export default handler;
