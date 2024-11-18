import React from 'react';

const Profile = ({ 
    date = '2024.11.21.목',
    nickname = '닉네임',
    profileImage,
    onTodayRoutinePress,
    onCalendarPress,
    onMyPagePress,
    onRoutineGoalPress
}) => {
    return (
        // w-64 → w-full로 변경하고 전체 padding 증가
        <div className="flex flex-col p-8 border-2 border-blue-200 rounded-2xl bg-white w-full">
        {/* 날짜 표시 - 크기와 패딩 증가 */}
        <div className="bg-blue-50 py-4 px-8 rounded-2xl text-center mb-8">
            <span className="text-3xl font-bold">{date}</span>
        </div>

        {/* 점선으로 감싸진 컨텐츠 영역 - 패딩 증가 */}
        <div className="border-2 border-dashed border-gray-200 rounded-xl">
            <div className="border-2 border-gray-200 rounded-xl m-[1px] p-8">

            {/* 프로필 영역 - 이미지와 텍스트 크기 증가 */}
            <div className="flex flex-col items-center mb-20">
                <div className="mb-4">
                {profileImage ? (
                    <img 
                    src={profileImage} 
                    alt="프로필"
                    className="w-32 h-32 rounded-full object-cover" // 이미지 크기 증가
                    />
                ) : (
                    <div className="w-32 h-32 rounded-full bg-gray-200" />
                )}
                </div>
                <span className="text-2xl font-bold mt-4">{nickname}</span>
            </div>

            {/* 메뉴 버튼들 */}
            <div className="flex flex-col gap-4 items-center">
            <button 
                onClick={onTodayRoutinePress}
                className="w-36 py-3 bg-[#93C5FD] rounded-2xl text-2xl font-bold hover:bg-blue-100 transition-colors"
            >
                오늘의 루틴
            </button>

            <button 
                onClick={onCalendarPress}
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
                onClick={onRoutineGoalPress}
                className="w-36 py-3 bg-[#93C5FD] rounded-2xl text-2xl font-bold hover:bg-blue-100 transition-colors"
            >
                루틴 목표
            </button>
            </div>
        </div>
        </div>
    </div>
    );
};

export default Profile;