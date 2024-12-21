import { useState } from 'react';

function CategoryBox({ category, darkMode }) {
    let borderColor;
    let categoryName;

    switch (category) {
        case 'exercise':
            borderColor = darkMode ? 'border-[#B8B47A]' : 'border-yellow-200';
            categoryName = '운동';
            break;
        case 'reading':
            borderColor = darkMode ? 'border-[#725984]' : 'border-purple-200';
            categoryName = '독서';
            break;
        case 'study':
            borderColor = darkMode ? 'border-[#6C9370]' : 'border-green-200';
            categoryName = '공부';
            break;
        default:
            borderColor = darkMode ? 'border-blue-700' : 'border-blue-200';
            break;
    }

    return (
        <div className={`w-[80px] h-[40px] border-4 ${borderColor} flex items-center justify-center rounded-lg mr-10`}>
            {categoryName}
        </div>
    );
}

function getDayName(day) {
    const days = ['일', '월', '화', '수', '목', '금', '토', '일'];
    return days[day];
}

// props로 데이터를 받아서 표시만 하는 역할
export default function TodayRoutineItem({ routine, darkMode }) {
    return (
        <div className="w-[900px] h-[60px] border border-blue-200 rounded-lg flex items-center p-2">
            <CategoryBox category={routine.category} />

            <p className="text-lg font-semibold">
                {routine.title}
            </p>

            <div className="flex ml-auto">
                <div className={`w-[200px] h-[35px] ${darkMode ? 'bg-gray-600 text-white' : 'bg-gray-200 text-black'} rounded-full mr-2 flex items-center justify-center`}>
                    {routine.startDate.split('T')[0]}({getDayName(new Date(routine.startDate).getDay())})~
                    {routine.endDate.split('T')[0]}({getDayName(new Date(routine.endDate).getDay())})
                </div>

                <div className={`w-[60px] h-[35px] ${darkMode ? 'bg-gray-600 text-white' : 'bg-gray-200 text-black'} rounded-full mr-2 flex items-center justify-center`}>
                    {routine.times}회 이상
                </div>

            </div>
        </div>
    );
}
