import React from 'react';
import IsLoggedIn from './components/IsLoggedIn';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const App = () => {
  const navigate = useNavigate();
  const isLoggedIn = IsLoggedIn();

  useEffect(() => {
    if (isLoggedIn === null) {
      return; // 로딩 중일 때는 아무것도 하지 않음
    }

    if (isLoggedIn) {
      navigate('/today');
    } else {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  return (
    <div>Loading...</div>
  );
};

export default App;