const CalendarBox = ({ date, completed }) => {
	const getColor = (category) => {
    switch (category) {
      case 'reading':
        return 'bg-purple-400';
      case 'exercise':
        return 'bg-yellow-400';
      case 'study':
        return 'bg-green-400';
      default:
        return 'bg-gray-400'; // 기본값
    }
  };

	return (
		<div className="w-24 h-24 border-2 border-blue-200 rounded-xl">
			<p className="text-lg text-center">{date}</p> 

			{/* 완료한 루틴이 있을 때 최대 3개 표시 */}
			{date && completed && completed.length > 0 ? (
        completed.slice(0, 3).map((routine, index) => {
          const color = getColor(routine.category); //카테고리별 색상

          return (
            <div key={index} className="flex items-center">
              <div className={`min-w-3 h-3 rounded-full mt-0.5 ml-1 ${color}`}></div>
              <div className="text-sm ml-1 truncate">{routine.title}</div>
            </div>
          );
        })
      ) : (
        <p className="text-sm text-center text-gray-400">완료한 루틴 없음</p>
      )}
		</div>
	);
	
}

export default CalendarBox;