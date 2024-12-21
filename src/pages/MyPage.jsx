import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // 사용자 정보를 백엔드에서 가져오기
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/users/session", {
          withCredentials: true, // 세션 쿠키 포함
        });
        setUserInfo(response.data.data); // 사용자 정보 설정
        setLoading(false);
      } catch (err) {
        setError("사용자 정보를 가져오는 데 실패했습니다.");
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3000/api/users/signout", {}, { withCredentials: true });
      navigate("/"); // 로그아웃 후 메인 페이지로 이동
    } catch (err) {
      console.error("로그아웃 실패:", err);
      setError("로그아웃에 실패했습니다.");
    }
  };

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>{error}</div>;

  const { name = "닉네임 없음", email = "이메일 없음", picture } = userInfo || {};

  return (
    <div>
      <div className="flex justify-center mb-8"/>

      <div className="flex justify-center mb-8">
      
      <div className="w-32 h-32 rounded-full border-2 overflow-hidden">
  {picture ? (
    <img 
      src={picture} 
      alt="프로필 사진" 
      className="w-full h-full object-cover object-center"
    />
  ) : (
    <div className="w-full h-full bg-gray-200" />
  )}
</div>
</div>

      {/* Profile Information Box */}
      <div className="w-[400px] mx-auto rounded-2xl border border-blue-200 p-6 mb-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-xl text-black">닉네임</div>
          <div className="text-xl font-medium">{name}</div>
          <div className="text-xl text-black">이메일</div>
          <div className="text-xl font-medium">{email}</div>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="flex justify-center gap-4">
        <button className="px-6 py-2 bg-blue-100 rounded-xl text-black">
          로그아웃
        </button>
        <button className="px-6 py-2 bg-red-300 rounded-xl text-black">
          폰탈퇴
        </button>
      </div>
    </div>
  );
};

export default MyPage;
