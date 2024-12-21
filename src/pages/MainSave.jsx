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
      <div className="flex flex-col items-start w-full max-w-4xl relative"> {/* 텍스트와 아래 박스를 감싸는 컨테이너 */}
        <div className="flex justify-between items-center w-full p-6">
          <p className='text-5xl'>Routine Monster</p>
          <button
            onClick={toggleDarkMode}
            className="p-2 border border-blue-400 rounded"
          >
            {darkMode ? '라이트 모드' : '다크 모드'}
          </button>
        </div>

        <div className='flex justify-center w-full'>
          <div className='pl-6 pr-3'>
            <Profile setData={setPage} darkMode={darkMode}/> {/* setPage를 props로 전달 */}
          </div>

          <div className={`flex flex-col items-center w-[750px] border-2 ${darkMode ? 'border-blue-400 bg-gray-800' : 'border-blue-400 bg-white'} rounded-2xl`}>
            <PageNameBox page={page} />

            <div className='p-2'>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
