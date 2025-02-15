'use client';

import { useRouter } from 'next/navigation'; // ✅ Fixed import
import Itag from './Itag';
import './sign.css';
import { useState } from 'react';

export default function SignUp() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [seller, setSeller] = useState('');
    const [error, setError] = useState('');

    const handleSign = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.push('/signin');
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({ name, email, password, address, phoneNumber, country, seller }, "--------");

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            console.log(error);

            return;
        }

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password, address, phoneNumber, country, seller }),
            });

            const data = await res.json();

            if (res.ok) {
                router.push('/signin');
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
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label>Name</label>
                        </div>

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

                        <select id="role" name="role" className='w-full p-1 text-2xl mb-3 rounded-lg' value={seller} onChange={(e) => setSeller(e.target.value)}>
                            <option value="seller">Seller</option>
                            <option value="user">user</option>
                        </select>

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
