import React, { useState } from 'react';
import Profile from '../components/Profile';
import PageNameBox from '../components/PageNameBox';
import { Outlet } from 'react-router-dom';

const Main = () => {
	const [page, setPage] = useState(0); // 상태 생성

	return (
		<div>
			<p className='text-5xl p-6'>Routine Monster</p>

			<div className='flex'>
				<div className='pl-6 pr-3'>
					<Profile setData={setPage} /> {/* setPage를 props로 전달 */}
				</div>

				<div className='flex flex-col items-center w-[750px] border-2 border-blue-400 bg-white rounded-2xl'>
					<PageNameBox page={page} />

					<div className='p-2 w-[570]'>
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;
