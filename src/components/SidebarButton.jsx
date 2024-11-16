function SidebarButton({page}) {
	return (
		<div className="w-32 text-xl text-center bg-blue-400 hover:bg-blue-300 rounded-3xl mb-2">
			<div className="p-2">{page}</div>
		</div>
	);
}

export default SidebarButton;

//<SidebarButton page='오늘의 루틴'/>