import React from 'react'
import axios from "axios";
import CalenderDay from '../components/CalenderDay';
import CalenderBox from '../components/CalenderBox';
import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const CalenderMain_2 = () => {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const year = parseInt(searchParams.get('year'));
	const month = parseInt(searchParams.get('month'));
	const monthEng = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const nextYear = month==12 ? year+1 : year;
	const prevYear = month==1 ? year-1 : year;
	const nextMonth = month==12 ? 1 : month+1;
	const prevMonth = month==1 ? 12 : month-1;

  const startDay = new Date(`${year}/${month}/1`).getDay(); //6
	const lastDate = new Date(year, month, 0).getDate(); //28
	const lastDay = new Date(`${year}/${month}/${lastDate}`).getDay();
	const dates = Array.from({ length: lastDate }, (_, index) => index + 1); //1 2 3.. 30 or 31 배열 생성
	const emptyPrev = Array.from({ length: startDay }, (_, index) => index + 1);
	const emptyPost = Array.from({ length: 6-lastDay }, (_, index) => index + 1);


	const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(new Array(lastDate).fill(null));

  const fetchCompletedRoutines = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:3000/api/date/calendar", {
        params: { year, month },
        withCredentials: true,
      }
      );
      setData(response.data);
    } catch (err) {
      setError('오류발생!!!!끄ㅇ아아악');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompletedRoutines();
  }, [month]);

  // result 배열에 날짜별로 완료한 루틴들 저장하기
  useEffect(() => {
    if (data && data.data) {
      const result = new Array(lastDate).fill(null);

      data.data.forEach((entry) => {
        const day = parseInt(entry.date.split('-')[2]);
        if (day >= 1 && day <= lastDate) {
          result[day - 1] = entry.completed || [];
        }
      });
      setResult(result);
    }
  }, [data]);

  if(loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>{error}</div>
  }

  return (
		<div className='flex flex-col justify-center items-center'>
			<div className='flex'>
				<Link to={`/Calendar?year=${prevYear}&month=${prevMonth}`} className='text-5xl'>&lt;</Link>
				<h2 className='text-5xl px-10'>{monthEng[month]}</h2>
				<Link to={`/Calendar?year=${nextYear}&month=${nextMonth}`} className='text-5xl'>&gt;</Link>
			</div>

			<div className='flex gap-2 pt-5 pb-2'>
        <CalenderDay day='Sunday' />
        <CalenderDay day='Monday' />
        <CalenderDay day='Tuesday' />
        <CalenderDay day='Wednesday' />
        <CalenderDay day='Thursday' />
        <CalenderDay day='Friday' />
        <CalenderDay day='Saturday' />
      </div>

			<div className='grid grid-cols-7 gap-2'>
          {emptyPrev.map( () => <CalenderBox />)}
          {dates.map((date) => (
        		<CalenderBox key={date} date={date} completed={result[date-1] || []}/>
      		)
					)}
					{emptyPost.map( () => <CalenderBox />)}
      	</div>
		</div>
  )
}

export default CalenderMain_2