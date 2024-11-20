import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RandingPage from "./pages/RandingPage";
import CalendarBoxTest from './components/CalenderBoxTest';

const App = () => {
  return (
    <div>
      <CalendarBoxTest month={11} date={1} />
    </div>
  );
};

export default App;
