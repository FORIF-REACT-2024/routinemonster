import React from 'react';
import Profile from '../components/Profile';
import CommentInput from '../components/CommentInput';
import TodayRoutineItem from '../components/TodayRoutineItem';

const RoutineToday = () => {
    const routines = Array(7).fill({
        type: '운동',
        description: '5km 실적 앞고 달리기',
        period: '2024.10.10.목 ~ 2024.10.12.토',
        frequency: '3'
    });

    return (
        <div className="min-h-screen bg-blue-50 p-4">
        {/* 페이지 타이틀 */}
        <div className="max-w-5xl mx-auto mb-4">
            <h1 className="text-4xl font-bold">Routine Monster</h1>
        </div>

        {/* 메인 컨텐츠 컨테이너 */}
        <div className="max-w-5xl mx-auto">
            <div className="flex gap-4">
            {/* 왼쪽 프로필 섹션 */}
            <div className="w-[360px]"> {/* width 조정 */}
                <Profile 
                date="2024.10.05.토"
                nickname="닉네임"
                
                onTodayRoutinePress={() => {}}
                onCalendarPress={() => {}}
                onMyPagePress={() => {}}
                onRoutineGoalPress={() => {}}
                />
            </div>

            {/* 오른쪽 루틴 섹션 */}
            <div className="flex-1">
                <div className="border-2 border-blue-200 rounded-2xl bg-white p-6">
                {/* 유저 루틴 헤더 */}
                <div className="mb-6">
                    <h2 className="text-3xl font-bold text-center">🌼 닉네임's Routine 🌼</h2>
                </div>

                {/* 루틴 리스트 */}
                <div className="space-y-4">
                    {routines.map((routine, index) => (
                    <TodayRoutineItem
                        key={index}
                        type={routine.type}
                        description={routine.description}
                        period={routine.period}
                        frequency={routine.frequency}
                    />
                    ))}
                </div>

                <div className="mt-6">
                    <CommentInput  />
                </div>

                {/* 저장 버튼 */}
                <div className="mt-4 text-center">
                    <button className="px-6 py-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 transition-colors">
                    저장하기
                    </button>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default RoutineToday;