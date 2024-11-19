import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RandingPage from "./pages/RandingPage";
import RoutineToday from './pages/RoutineToday'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RandingPage />} />
        <Route path="/routinetoday" element={<RoutineToday />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
