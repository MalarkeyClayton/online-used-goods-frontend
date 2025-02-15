'use client';

import { useRouter } from 'next/navigation'; // ✅ Fixed import
import Itag from './Itag';
import './sign.css';
import { useState } from 'react';

export default function SignUp() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');

    const handleSign = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.push('/signin');
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email, password, confirmPassword);

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            console.log(error);

            return;
        }

        // Call the signup API
        try {
            const res = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (res.ok) {
                router.push('/signin'); // Redirect to SignIn page
            } else {
                setError(data.error || 'Something went wrong');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="signupContainer">
                <div className="login-box">
                    <h2>Sign Up</h2>
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

                        <div className="input-box">
                            <input
                                type="password"
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <label>Confirm Password</label>
                        </div>

                        <div className="input-box">
                            <input
                                type="text"
                                required
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                            <label>Adress</label>
                        </div>

                        <div className="input-box">
                            <input
                                type="text"
                                required
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                            />
                            <label>Country</label>
                        </div>

                        <div className="input-box">
                            <input
                                type="text"
                                required
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                            <label>Phone Number</label>
                        </div>

                        <button className="btn" type="submit">Sign Up</button>

                        <div className="signup-link">
                            <p className='signup-link-text'>
                                Already have an account?{' '}
                            </p>
                            <button className="btn" onClick={(e) => handleSign(e)}>
                                Sign In
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
