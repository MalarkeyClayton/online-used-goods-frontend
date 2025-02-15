'use client';

import { useRouter } from 'next/navigation';
import Itag from './Itag';
import './sign.css';
import { useState } from 'react';

export default function SignIn() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSign = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.push('/signup');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (res.ok) {
                router.push('/'); // Redirect to the dashboard or home
            } else {
                console.log(data.error || 'Invalid credentials');
            }
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <>
            <div className="signinContainer">
                <div className="login-box">
                    <h2>Sign In</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-box">
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label>Email</label>
                        </div>

                        <div className="input-box">
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label>Password</label>
                        </div>

                        <button className="btn" type="submit">
                            Sign In
                        </button>
                        <div className="signup-link">
                            <p className='signup-link-text'>
                                Not you have an account?{' '}
                            </p>
                            <button onClick={(e) => handleSign(e)} className="btn">
                                Sign Up
                            </button>
                        </div>


                    </form>
                </div>

                {[...Array(49)].map((_, index) => (
                    <Itag key={index} index={index + 1} />
                ))}
            </div>
        </>
    );
}