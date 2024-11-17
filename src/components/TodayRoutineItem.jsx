function CategoryBox({ category }) {
    let borderColor;
    switch (category) {
        case "운동":
            borderColor = "border-yellow-200";
            break;
        case "독서":
            borderColor = "border-purple-200";
            break;
        case "공부":
            borderColor = "border-green-200";
            break;
        default:
            borderColor = "border-blue-200";
            break;
    }

    return (
        <div className={`w-[80px] h-[40px] bg-white border-4 ${borderColor} text-black flex items-center justify-center rounded-lg mr-10`}>
            {category}
        </div>
    );
}

function getDayName(day) {
    const days = ['일', '월', '화', '수', '목', '금', '토', '일'];
    return days[day];
}

export default function TodayRoutineItem({ category, title, startDate, endDate, frequency, achievement }) {
    const startDay = new Date(startDate).getDay();
    const endDay = new Date(endDate).getDay();
    return (
        <div className="w-[850px] h-[60px] bg-white border border-blue-200 rounded-lg flex items-center p-2">
            {/* 카테고리 표시 */}
            <CategoryBox category={category} />

            {/* 항목 제목 표시 */}
            <p className="text-lg font-semibold">
                {title}
            </p>

            {/* 기간, 횟수 표시 */}
            <div className="flex ml-auto">
                {/* 기간 표시 */}
                <div className="w-[300px] h-[35px] bg-gray-200 text-black rounded-full mr-2 flex items-center justify-center">
                    {startDate}({getDayName(startDay)})~{endDate}({getDayName(endDay)})
                </div>

                {/* 횟수 표시 */}
                <div className="w-[83px] h-[35px] bg-gray-200 text-black rounded-full mr-2 flex items-center justify-center">
                    {frequency}회 이상
                </div>
            </div>
        </div>
    );
}