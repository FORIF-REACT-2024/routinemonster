function CalenderDay({day}){
	return(
		<div class="bg-blue-200 text-black w-24 h-6 rounded-full text-center text-xl">
			{day}
		</div>
	);
}

export default CalenderDay;

//<CalenderDay day={'Sun'}/> -> Sunday