import { useEffect, useState } from "react";
import axios from "axios";

const CalendarBox = ({ month, date }) => {
	const [completedRoutines, setCompletedRoutines] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const selectedDate = new Date(2024, month - 1, date);
    
    const formattedDate = selectedDate.toISOString().split('T')[0];

    const fetchCompletedRoutines = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/date", {
					params: { date: formattedDate }, 
					withCredentials: true, 
				});
				
				console.log("일별 루틴 데이터: ", response.date.data);
        // const data = await response.json();

        const completed = response.todaylist.filter(routine => routine.completed);
        
        setCompletedRoutines(completed);
      } catch (err) {
        setError('오류발생!!!!끄아아악');
      }
    };

    fetchCompletedRoutines();
  }, [month, date]);

  if (error) {
    return <div>{error}</div>;
  }

	return (
		<div className="w-24 h-24 border-2 border-blue-200 rounded-xl">
			<p className="text-lg text-center">{date}</p>
	
			{completedRoutines.slice(0, 3).map((routine, index) => {
				const color = routine.category === 'reading' 
					? 'bg-purple-400' 
					: routine.category === 'workout' 
						? 'bg-yellow-400' 
						: 'bg-green-400';
	
				return (
					<div key={index} className="flex items-center">
						<div className={`min-w-3 h-3 rounded-full mt-0.5 ml-1 ${color}`}></div>
						<div className="text-sm ml-1 truncate">{routine.title}</div>
					</div>
				);
			})}
		</div>
	);
	
}

export default CalendarBox;