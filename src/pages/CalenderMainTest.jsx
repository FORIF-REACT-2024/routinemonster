import React from 'react'
import CalenderDay from '../components/CalenderDay';
import CalenderBox from '../components/CalenderBox';
import { useParams } from 'react-router-dom';

const CalenderMainTest = () => {
  const {month} = useParams();
  console.log(month);
  const endDate = month==11 ? 30 : 31;
	const monthEng = month==11 ? 'November' : 'December'

  return (
    <div>
      
    </div>
  )
}

export default CalenderMainTest;