import React from "react";
import { useLocation } from "react-router-dom";
import MakeRoutineButton from "../components/MakeRoutineButton";

export default function LoginCompletePage() {
    const location = useLocation();
    const { name, email, picture } = location.state || {}; // 전달된 사용자 정보
    return (
        <div className="flex items-center justify-center h-screen bg-cornflower-50">
            <div className="bg-white border-2 border-blue-400 rounded-lg p-6 shadow-md text-center">
                <h1 className="text-3xl font-bold mb-8">로그인 성공!</h1>
                {picture && <img src={picture} alt="User Profile" className="rounded-full w-24 h-24 mx-auto mb-4" />}
                {name && <p className="text-lg font-medium mb-2">{name}</p>}
                {email && <p className="text-sm text-gray-600 mb-4">{email}</p>}
                <MakeRoutineButton />
            </div>
        </div>
    );
}
