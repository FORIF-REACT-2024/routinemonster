import React, { useState, useEffect } from 'react';
import Profile from '../components/Profile';
import PageNameBox from '../components/PageNameBox';
import { Outlet } from 'react-router-dom';

const Main = () => {
  const [page, setPage] = useState(0); // 상태 생성
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-blue-100 text-black'}`}>
      <div className="flex items-center justify-center w-full pb-6">
        <p className="text-5xl">Routine Monster</p>
        <button
          onClick={toggleDarkMode}
          className="p-2 border border-blue-400 rounded ml-[700px]"
        >
          {darkMode ? '라이트 모드' : '다크 모드'}
        </button>
      </div>

      <div className="flex">
        <div className="pr-3">
          <Profile setData={setPage} darkMode={darkMode} />
        </div>

        <div className={`flex flex-col items-center w-[750px] border-2 ${darkMode ? 'border-blue-400 bg-gray-800' : 'border-blue-400 bg-white'} rounded-2xl`}>
          <PageNameBox page={page} />

          <div className="p-2">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
