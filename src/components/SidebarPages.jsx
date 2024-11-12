function SidebarPages() {
	return (
		<div>
			<button className="w-32 text-xl text-center bg-blue-400 hover:bg-blue-300 rounded-3xl mb-2">
				<div className="p-2">오늘의 루틴</div>
			</button>
			<button className="w-32 text-xl text-center bg-blue-400 hover:bg-blue-300 rounded-3xl mb-2">
				<div className="p-2">캘린더</div>
			</button>
			<button className="w-32 text-xl text-center bg-blue-400 hover:bg-blue-300 rounded-3xl mb-2">
				<div className="p-2">마이페이지</div>
			</button>
			<button className="w-32 text-xl text-center bg-blue-400 hover:bg-blue-300 rounded-3xl mb-2">
				<div className="p-2">푸틴 목록</div>
			</button>
		</div>
	);
}

export default SidebarPages;