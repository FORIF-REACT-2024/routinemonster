function CalenderDay({day}){
	return(
		<div class="bg-blue-200 w-24 h-6 rounded-full text-center text-sm">
			{day}day
		</div>
	);
}

export default CalenderDay;

//<CalenderDay day={'Sun'}/> -> Sunday