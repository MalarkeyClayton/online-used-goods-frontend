'use client';

import { useRouter } from 'next/navigation';
import { useState } from "react";

import authApi from '../api/authApi';

import Link from "next/link"; // Importing next/link

export default function SignIn() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<any>({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors: any = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // POST request with Axios to the sign-in API
      const res = await authApi.login(formData);

      if (res.message === "Login successful!") {
        // If successful, redirect to the dashboard or homepage
        router.push("/"); // Example redirect after successful login
      }
    } catch (error: any) {
      setErrorMessage(error?.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-96"
      >
        <h2 className="text-xl font-semibold mb-4">Sign In</h2>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        <label className="block mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}

        <label className="block mt-4">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 mt-4 rounded-md"
        >
          Sign In
        </button>

        <div className="mt-4 text-center">
          <p>
            Don't have an account?{" "}
            <Link href="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}





