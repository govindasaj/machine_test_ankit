"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, ReactNode } from "react";
import { getAuthToken } from "../utils/Auth";

interface ProtectedRouteProps {
    children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
    const router = useRouter();

    useEffect(() => {
        const token = getAuthToken();

        if (!token) {
            router.push("/"); 
        }
    }, [router]);

    return <>{children}</>; 
}
