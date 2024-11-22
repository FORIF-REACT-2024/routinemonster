import React from 'react';
import RandingPage from "./pages/RandingPage";
import CalenderMain from './pages/CalenderMain';

const App = () => {
  return (
    <div>
      {/* <RandingPage /> */}
      <CalenderMain month={11}/>
    </div>
  );
};

export default App;
