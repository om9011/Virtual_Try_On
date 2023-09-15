import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Registration.css";
import axios from 'axios';

const Registration = () => {
    const [formData, setFormData] = useState({
        name: '',
        contact_details: '',
        address: '',
        image: null,
        username: '',
        email: '',
        password: '',
        confirmPassword: '', // Add confirmPassword field
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            image: file,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:5000/register', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('Registration successful', response.data);
            // You can add code here to redirect the user to a login page or display a success message.
        } catch (error) {
            console.error('Registration failed', error);
            // Handle registration failure (e.g., display an error message).
        }
    };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src="https://i.pinimg.com/originals/fe/93/b0/fe93b053043276b38386e625295af6cc.gif"
                    alt="Your Company"
                />
                <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Create Account
                </h2>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className='flex'>

                    <div className='left'>
                        <div className="md:mt-4 md:mx-auto md:w-full md:max-w-sm">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Name
                                </label>
                                <div className="mt-4">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        onChange={handleChange}
                                        required
                                        className="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className='mt-4'>
                                <label htmlFor="contact_details" className="block text-sm font-medium leading-6 text-gray-900">
                                    Contact Details
                                </label>
                                <div className="mt-4">
                                    <input
                                        id="contact_details"
                                        name="contact_details"
                                        type="text"
                                        autoComplete="contact_details"
                                        onChange={handleChange}
                                        required
                                        className="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className='mt-4'>
                                <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                                    Address
                                </label>
                                <div className="mt-4">
                                    <input
                                        id="address"
                                        name="address"
                                        type="text"
                                        autoComplete="address"
                                        onChange={handleChange}
                                        required
                                        className="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className='mt-4'>
                                <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900">
                                    Upload your Image For Future Try-On
                                </label>
                                <div className="mt-4">
                                    <input
                                        id="image"
                                        name="image"
                                        type="file"
                                        onChange={handleFileChange}
                                        required
                                        className="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <div className="md:mt-4 md:mx-auto sd:w-full md:max-w-sm">
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                    Username
                                </label>
                                <div className="mt-4">
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        autoComplete="username"
                                        required
                                        onChange={handleChange}
                                        className="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className='mt-4'>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-4">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        onChange={handleChange}
                                        className="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className='mt-4'>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                </div>
                                <div className="mt-4">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="new-password"
                                        required
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className='mt-4'>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                                        Confirm Password
                                    </label>
                                </div>
                                <div className="mt-4">
                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="password"
                                        autoComplete="new-password"
                                        required
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Registration;
