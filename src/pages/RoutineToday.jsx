import React from 'react';
import Profile from '../components/Profile';
import CommentInput from '../components/CommentInput';
import TodayRoutineItem from '../components/TodayRoutineItem';
import { Checkbox } from '@mui/material';

const RoutineToday = () => {
	const routines = Array(7).fill({
		type: '운동',
		description: '5km 실적 앞고 달리기',
		startDate: '2024-11-01',
		endDate: '2024-11-19',
		frequency: '3',
		status: 'ongoing'
	});

	const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

	return (
		<div>
			{/* 메인 컨텐츠 컨테이너 */}
			<div className="max-w-5xl mx-auto">
				<div className="flex gap-4">
					{/* 오른쪽 루틴 섹션 */}
					<div className="flex-1">
						{/* 루틴 리스트 */}
						<div className="space-y-4">
							{routines.map((routine, index) => (
								<div key={index} className="flex items-center space-x-4">
									<Checkbox {...label} />
									<TodayRoutineItem
										type={routine.type}
										description={routine.description}
										period={routine.period}
										frequency={routine.frequency}
									/>
								</div>
							))}
						</div>

						<div className="mt-6">
							<CommentInput />
						</div>

						{/* 저장 버튼 */}
						<div className="mt-4 text-center">
							<button className="px-6 py-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 transition-colors">
								저장하기
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>

	);
};

export default RoutineToday;