import React from 'react'
import CalenderDay from '../components/CalenderDay';
import CalenderBox from '../components/CalenderBox';

const CalenderMain = ({month}) => {
	//11월이랑 12월만 고려했심다 ,,
	const endDate = month==11 ? 30 : 31;
	const monthEng = month==11 ? 'November' : 'December'
	const dates = Array.from({ length: endDate }, (_, index) => index + 1);

  return (
		<div className='flex flex-col justify-center items-center'>
			<div className='flex'>
				<p className='text-5xl'>&lt;</p>
				<h2 className='text-5xl px-10'>{monthEng}</h2>
				<p className='text-5xl'>&gt;</p>
			</div>

			<div className='flex gap-2 pt-5 pb-2'>
				<CalenderDay day='Sunday'/>
				<CalenderDay day='Monday'/>
				<CalenderDay day='Tuesday'/>
				<CalenderDay day='Wednesday'/>
				<CalenderDay day='Thursday'/>
				<CalenderDay day='Friday'/>
				<CalenderDay day='Saturday'/>
			</div>

			{month==11 && (
			<div className='grid grid-cols-7 gap-2'>
				<CalenderBox/>
				<CalenderBox/>
				<CalenderBox/>
				<CalenderBox/>
				<CalenderBox/>
				{dates.map((date) => (
        	<CalenderBox month={month} date={date} />
      	)
				)}
			</div>
			)}

			{month==12 && (
			<div className='grid grid-cols-7 gap-2'>
				{days.map((date) => (
        	<CalenderBox month={month} date={date} />
      	)
				)}
				<CalenderBox/>
				<CalenderBox/>
				<CalenderBox/>
				<CalenderBox/>
			</div>
			)}
			
		</div>
  )
}

export default CalenderMain;