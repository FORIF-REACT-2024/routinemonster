import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const MyPage = () => {
  const [currentPage, setCurrentPage] = useState(2); // 현재 페이지
  const [totalPages, setTotalPages] = useState(2);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { name, email, picture } = navigate.state || {};

  return (
    <div>
      <div className="flex justify-center mb-8"/>

     <img 
            src={picture} 
            alt="프로필 사진" 
            className="w-full h-full object-cover object-center"
          />

      {/* Profile Information Box */}
      <div className="mx-auto rounded-2xl border border-blue-200 p-6 mb-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-gray-600">닉네임</div>
          <div className="font-medium">{name}</div>
          <div className="text-gray-600">이메일</div>
          <div className="font-medium">{email}</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4">
        <button className="px-6 py-2 bg-blue-100 rounded-xl text-black">
          로그아웃
        </button>
        <button className="px-6 py-2 bg-red-300 rounded-xl text-black">
          탈퇴하기
        </button>
      </div>
    </div>
  );
};

export default MyPage;