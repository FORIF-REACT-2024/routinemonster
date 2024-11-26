import { useState } from 'react';

function CategoryBox({ category }) {
    // CategoryBox 컴포넌트는 그대로 유지
    let borderColor;
    let displayText;
    switch (category) {
        case "study":
            borderColor = "border-green-200";
            displayText = "공부";
            break;
        case "reading":
            borderColor = "border-purple-200";
            displayText = "독서";
            break;
        case "exercise":
            borderColor = "border-yellow-200";
            displayText = "운동";
            break;
        default:
            borderColor = "border-blue-200";
            displayText = category;
            break;
    }

    return (
        <div className={`w-[80px] h-[40px] bg-white border-4 ${borderColor} text-black flex items-center justify-center rounded-lg mr-10`}>
            {displayText}
        </div>
    );
}

function getDayName(day) {
    const days = ['일', '월', '화', '수', '목', '금', '토', '일'];
    return days[day];
}

// props로 데이터를 받아서 표시만 하는 역할
export default function TodayRoutineItem({ routine }) {
    return (
        <div className="w-[900px] h-[60px] bg-white border border-blue-200 rounded-lg flex items-center p-2">
            <CategoryBox category={routine.category} />

            <p className="text-lg font-semibold">
                {routine.title}
            </p>

            <div className="flex ml-auto">
                <div className="w-[200px] h-[35px] bg-gray-200 text-black rounded-full mr-2 flex items-center justify-center">
                    {routine.startDate.split('T')[0]}({getDayName(new Date(routine.startDate).getDay())})~
                    {routine.endDate.split('T')[0]}({getDayName(new Date(routine.endDate).getDay())})
                </div>

                <div className="w-[60px] h-[35px] bg-gray-200 text-black rounded-full mr-2 flex items-center justify-center">
                    {routine.times}회 이상
                </div>

            </div>
        </div>
    );
}