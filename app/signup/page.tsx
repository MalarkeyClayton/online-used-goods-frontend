'use client';

import { useRouter } from 'next/navigation';
import { useState } from "react";

import { User } from "@/types/user";
import authApi from '../api/authApi';


export default function SignUp() {
    const router = useRouter();
    const [formData, setFormData] = useState<User>({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      country: "",
      address: "",
      phone: "",
      seller: false,
    });
    const [errors, setErrors] = useState<any>({});
    const [errorMessage, setErrorMessage] = useState("");
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value, type, checked } = e.target;
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    };
  
    const validate = () => {
      const newErrors: any = {};
      if (!formData.name) newErrors.name = "Name is required";
      if (!formData.email) newErrors.email = "Email is required";
      if (!formData.password) newErrors.password = "Password is required";
      if (formData.password !== formData.confirmPassword)
        newErrors.confirmPassword = "Passwords do not match";
      if (!formData.country) newErrors.country = "Country is required";
      if (!formData.address) newErrors.address = "Address is required";
      if (!formData.phone) newErrors.phone = "Phone number is required";
      if (formData.phone.length < 10) newErrors.phone = "Phone number is too short";
      return newErrors;
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      const validationErrors = validate();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
  
      const res = await authApi.register(formData);
  
      if (res.message === "User created successfully!") {
        router.push("/"); // Redirect to sign-in page on success
      } else {
        setErrorMessage(res.message || "Sign-up failed");
      }
    };
  
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md w-96"
        >
          <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
  
          <label className="block mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
  
          <label className="block mt-4">Email</label>
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
  
          <label className="block mt-4">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword}</p>
          )}
  
          <label className="block mt-4">Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
          {errors.country && (
            <p className="text-red-500">{errors.country}</p>
          )}
  
          <label className="block mt-4">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
          {errors.address && (
            <p className="text-red-500">{errors.address}</p>
          )}
  
          <label className="block mt-4">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
          {errors.phone && <p className="text-red-500">{errors.phone}</p>}
  
          <label className="block mt-4 flex items-center">
            <input
              type="checkbox"
              name="seller"
              checked={formData.seller}
              onChange={handleChange}
              className="mr-2"
            />
            <span>Are you a seller?</span>
          </label>
  
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 mt-4 rounded-md"
          >
            Sign Up
          </button>
        </form>
      </div>
    );
}