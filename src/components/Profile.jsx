import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = ({ onMyPagePress, setData, darkMode }) => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    
    useEffect(() => {
        // localStorage에서 사용자 정보 가져오기
        const storedProfile = localStorage.getItem('userProfile');
        if (storedProfile) {
            const parsed = JSON.parse(storedProfile);
            setUserData(parsed);
        }
    }, []);

    const today = new Date();
    const formattedDate = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        weekday: 'short'
    });

    const handleTodayRoutine = () => {
        setData(0);
        navigate('/today');
    };

    const handleCalender = () => {
        setData(1);
        navigate('/Calender/11');
    };

    const handleRoutineList = () => {
        setData(3);
        navigate('/routine-lists');
    };

    return (
        <div className={`flex flex-col p-8 border-2 ${darkMode ? 'border-blue-400 bg-gray-800' : 'border-blue-400 bg-white'} rounded-2xl w-64`}>
            <div className="text-black bg-blue-50 py-4 px-8 rounded-2xl text-center mb-8">
                <span className="text-2xl font-bold">{formattedDate}</span>
            </div>

            <div className="border-2 border-dashed border-gray-200 rounded-xl">
                <div className="border-2 border-gray-200 rounded-xl m-[1px] p-8">
                    <div className="flex flex-col items-center mb-20">
                        <div className="mb-4">
                            {userData?.picture ? (
                                <img
                                    src={userData.picture}
                                    alt="프로필"
                                    className="w-32 h-32 rounded-full object-cover"
                                />
                            ) : (
                                <div className="w-32 h-32 rounded-full bg-gray-200" />
                            )}
                        </div>
                        <span className="text-2xl font-bold mt-4">
                            {userData?.name || '사용자'}
                        </span>
                    </div>

                    <div className="flex flex-col gap-4 items-center">
                        <button
                            onClick={handleTodayRoutine}
                            className="w-36 py-3 bg-[#93C5FD] rounded-2xl text-2xl font-bold hover:bg-blue-100 transition-colors"
                        >
                            오늘의 루틴
                        </button>

                        <button
                            onClick={handleCalender}
                            className="w-36 py-3 bg-[#93C5FD] rounded-2xl text-2xl font-bold hover:bg-blue-100 transition-colors"
                        >
                            캘린더
                        </button>

                        <button
                            onClick={onMyPagePress}
                            className="w-36 py-3 bg-[#93C5FD] rounded-2xl text-2xl font-bold hover:bg-blue-100 transition-colors"
                        >
                            마이페이지
                        </button>

                        <button
                            onClick={handleRoutineList}
                            className="w-36 py-3 bg-[#93C5FD] rounded-2xl text-2xl font-bold hover:bg-blue-100 transition-colors"
                        >
                            루틴 목록
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;


