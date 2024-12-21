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

export default function RoutineItem({ category, title, startDate, endDate, frequency, achievement, darkMode }) {
    const startDay = new Date(startDate).getDay();
    const endDay = new Date(endDate).getDay();
    return (
        <div className="w-[1000px] h-[60px] border border-blue-200 rounded-lg flex items-center p-2">
            {/* 카테고리 표시 */}
            <CategoryBox category={category} darkMode={darkMode} />

            {/* 항목 제목 표시 */}
            <p className="text-lg font-semibold">
                {title}
            </p>
            
            {/* 기간, 횟수, 달성률 표시 */}
            <div className="flex ml-auto">
                {/* 기간 표시 */}
                <div className={`w-[200px] h-[35px] ${darkMode ? 'bg-gray-600 text-white' : 'bg-gray-200 text-black'} rounded-full mr-2 flex items-center justify-center`}>
                    {startDate}({getDayName(startDay)})~{endDate}({getDayName(endDay)})
                </div>

                {/* 횟수 표시 */}
                <div className={`w-[60px] h-[35px] ${darkMode ? 'bg-gray-600 text-white' : 'bg-gray-200 text-black'} rounded-full mr-2 flex items-center justify-center`}>
                    {frequency}회 이상
                </div>

                {/* 달성률 표시 */}
                <div className={`w-[35px] h-[35px] ${darkMode ? 'bg-[#5899B0]' : 'bg-blue-200'} text-black rounded-full flex items-center justify-center`}>
                    {Math.floor(achievement * 100)}%
                </div>
            </div>
        </div>
    );
}