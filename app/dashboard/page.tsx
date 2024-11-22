"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAuthToken, removeAuthToken } from "../utils/Auth";
import ProtectedRoute from "../components/ProtectedRoute";

export default function Profile() {
    const router = useRouter();

    const handleLogout = () => {
        removeAuthToken(); 
        router.push("/");   
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            removeAuthToken(); 
            router.push("/");   
        }, 5 * 60 * 1000); 

        return () => clearTimeout(timer); 
    }, [router]);

    return (
        <ProtectedRoute>
            <div className="container mx-auto p-6">
                <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="flex justify-between items-center p-6 bg-gray-800 text-white">
                        <h2 className="text-2xl font-semibold">Your Profile</h2>
                        <button
                            onClick={handleLogout}
                            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none"
                        >
                            Logout
                        </button>
                    </div>
                    <div className="p-6">
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-600">Name</label>
                            <input
                                type="text"
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                                value="Ankit Pandey" 
                                disabled
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-600">Email</label>
                            <input
                                type="email"
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                                value="pandeyankit4568@gmail.com" 
                                disabled
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-600">Phone</label>
                            <input
                                type="text"
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                                value="+91 - 9770204564" 
                                disabled
                            />
                        </div>
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
}
