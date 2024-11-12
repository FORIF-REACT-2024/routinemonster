function CalendarBox({ date, todo1, todo2, todo3, color1, color2, color3 }) {
	const colorClass1 = color1 ? `bg-${color1}` : "bg-gray-300";
	const colorClass2 = color2 ? `bg-${color2}` : "bg-gray-300";
	const colorClass3 = color3 ? `bg-${color3}` : "bg-gray-300";

	return (
		<button className="w-24 h-24 border-2 border-blue-200 rounded-xl p-2">
			<div className="text-sm text-center">{date}</div>

			{todo1 && ( //완료한 목표가 있을 때만!
				<div className="inline-flex items-center">
					<div className={`w-3 h-3 rounded-full mt-0.5 ml-1 ${colorClass1}`}></div>
					<div className="text-xs ml-1">{todo1}</div>
				</div>
			)}
			{todo2 && (
				<div className="inline-flex items-center">
					<div className={`w-3 h-3 rounded-full mt-0.5 ml-1 ${colorClass2}`}></div>
					<div className="text-xs ml-1">{todo2}</div>
				</div>
			)}
			{todo3 && (
				<div className="inline-flex items-center">
					<div className={`w-3 h-3 rounded-full mt-0.5 ml-1 ${colorClass3}`}></div>
					<div className="text-xs ml-1">{todo3}</div>
				</div>
			)}
		</button>
	);
}

export default CalendarBox;

//<CalenderBox date='1' todo1='춤추기' color1='blue-400' todo2='노래하기'/>