import React from 'react';
import RandingPage from "./pages/RandingPage";
import CalenderMain from './pages/CalenderMain';

const App = () => {
  return (
    <div>
      {/* <RandingPage /> */}
      {/* <CalendarBoxTest month={11} date={1} /> */}
      <CalenderMain month={11}/>
    </div>
  );
};

export default App;
