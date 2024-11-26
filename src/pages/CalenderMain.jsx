import React from 'react'
import axios from "axios";
import CalenderDay from '../components/CalenderDay';
import CalenderBox from '../components/CalenderBox';
import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';

const CalenderMain = () => {
  const { monthprop } = useParams();
  const month = parseInt(monthprop, 10);
  const year = 2024;
  const endDate = month == 11 ? 30 : 31;
  const monthEng = month == 11 ? 'November' : 'December'
  const dates = Array.from({ length: endDate }, (_, index) => index + 1); //1 2 3.. 30 or 31 배열 생성

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(new Array(endDate).fill(null));

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
      const result = new Array(endDate).fill(null);

      data.data.forEach((entry) => {
        const day = parseInt(entry.date.split('-')[2]);
        if (day >= 1 && day <= endDate) {
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
        <Link to="/Calender/11" className='text-5xl'>&lt;</Link>
        <h2 className='text-5xl px-10'>{monthEng}</h2>
        <Link to="/Calender/12" className='text-5xl'>&gt;</Link>
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

      {month == 11 && (
        <div className='grid grid-cols-7 gap-2'>
          <CalenderBox />
          <CalenderBox />
          <CalenderBox />
          <CalenderBox />
          <CalenderBox />
          {dates.map((date) => (
        		<CalenderBox key={date} date={date} completed={result[date-1] || []}/>
      		)
					)}
      	</div>
      )}

			{month==12 && (
        <div className='grid grid-cols-7 gap-2'>
          {dates.map((date) => (
            <CalenderBox key={date} date={date} completed={result[date - 1] || []} />
          )
          )}
          <CalenderBox />
          <CalenderBox />
          <CalenderBox />
          <CalenderBox />
      	</div>
      )}


    </div>
  )
}


export default CalenderMain;