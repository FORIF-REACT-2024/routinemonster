import React, { useState } from 'react';
import Profile from '../components/Profile';
import CategoryBox from '../components/CategoryBox';
import { useNavigate } from 'react-router-dom';

const RoutineAdd = () => {
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const [selectedCategory, setSelectedCategory] = useState(null);

	const getDaysDiff = (start, end) => {
		if (!start || !end) return 0;
		const diff = end.getTime() - start.getTime();
		return Math.ceil(diff / (1000 * 3600 * 24));
	};

	const handleCategoryClick = (category) => {
		setSelectedCategory(category); // 선택된 카테고리를 업데이트
	};

	const navigate = useNavigate();

	const handleAddCancel = () => {
		navigate('/routine-lists');
	}

	return (
		<div>
			<h2 className="text-3xl font-bold text-center mt-6 my-3">🐈 추가 🐈</h2>

			<div className="space-y-6 border-2 border-blue-200 rounded-2xl p-6 text-lg">
				<div className="flex items-center mb-4">
					<label className="font-medium w-24 mr-4">카테고리</label>
					<div className="flex gap-2">
						<CategoryBox
							category={1}
							selectedCategory={selectedCategory}
							onClick={handleCategoryClick}
						/>
						<CategoryBox
							category={2}
							selectedCategory={selectedCategory}
							onClick={handleCategoryClick}
						/>
						<CategoryBox
							category={3}
							selectedCategory={selectedCategory}
							onClick={handleCategoryClick}
						/>
					</div>
				</div>
				<div className="flex items-center mb-4">
					<label className="font-medium w-24 mr-4">루틴명</label>
					<input
						type="text"
						className="flex-1 border-2 border-blue-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
						placeholder="루틴 이름을 입력하세요"
					/>
				</div>
				<div className="flex items-center mb-4">
					<label className="font-medium w-24 mr-4">시작날짜</label>
					<input
						type="date"
						className="flex-1 border-2 border-blue-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
						onChange={(e) => setStartDate(new Date(e.target.value))}
					/>
				</div>
				<div className="flex items-center mb-4">
					<label className="font-medium w-24 mr-4">종료날짜</label>
					<input
						type="date"
						className="flex-1 border-2 border-blue-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
						onChange={(e) => setEndDate(new Date(e.target.value))}
					/>
				</div>
				<div className="flex items-center">
					<label className="font-medium w-24 mr-4">횟수</label>
					<select className="flex-1 border-2 border-blue-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-300">
						{Array.from({ length: getDaysDiff(startDate, endDate) + 1 }, (_, i) => (
							<option key={i}>{i + 1}회</option>
						))}
					</select>
				</div>
				{/* 다른 필드 */}
				<div className="mt-4 text-center flex justify-center space-x-4 ">
					<button className="px-6 py-2 bg-blue-200 text-black rounded-md hover:bg-blue-300 transition-colors border-2 border-blue-300">
						저장하기
					</button>
					<button
						className="px-6 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors border-2 border-blue-300"
						onClick={handleAddCancel}
					>
						취소하기
					</button>
				</div>
			</div>
		</div>
	);
};

export default RoutineAdd;