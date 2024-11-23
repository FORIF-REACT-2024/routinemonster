import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CategoryBox from '../components/CategoryBox';

const RoutineAdd = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [title, setTitle] = useState('');
    const [times, setTimes] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate();

    const getDaysDiff = (start, end) => {
        if (!start || !end) return 0;
        const diff = end.getTime() - start.getTime();
        return Math.ceil(diff / (1000 * 3600 * 24));
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category); // 선택된 카테고리 업데이트
    };

    const handleSave = async () => {
        if (!title || !selectedCategory || !startDate || !endDate || times < 1) {
            alert("모든 필드를 입력해주세요🤔");
            return;
        }
        const payload = {
            title,
            category: selectedCategory,
            startDate: startDate.toISOString().split('T')[0],
            endDate: endDate.toISOString().split('T')[0],
            times,
        };
        
        console.log(payload);
        setIsSubmitting(true);
        try {
            const response = await axios.post('http://localhost:3000/api/routine/write', payload, {withCredentials: true,});
            
            if (response.status === 200) {
                alert("루틴 추가 완료✔️");
                navigate('/routine-lists');
            }
        } catch (error) {
            console.error(error);
            alert("루틴 추가에 실패했습니다🥲");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleAddCancel = () => {
        navigate('/routine-lists'); // 취소 버튼 클릭 시 페이지 이동
    };

    return (
        <div className="border-2 border-blue-200 rounded-2xl bg-white p-6 w-full max-w-2xl">
            <div className="mb-6 border-blue-200 border-2 rounded-lg py-4">
                <h2 className="text-3xl font-bold text-center">🐈 루틴 추가 🐈</h2>
            </div>
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
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
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
                    <select
                        className="flex-1 border-2 border-blue-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        value={times}
                        onChange={(e) => setTimes(Number(e.target.value))}
                    >
                        {startDate && endDate && Array.from({ length: getDaysDiff(startDate, endDate) + 1 }, (_, i) => (
                            <option key={i} value={i + 1}>
                                {i + 1}회
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mt-4 text-center flex justify-center space-x-4">
                    <button
                        className="px-6 py-2 bg-blue-200 text-black rounded-md hover:bg-blue-300 transition-colors border-2 border-blue-300"
                        onClick={handleSave}
                    >
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