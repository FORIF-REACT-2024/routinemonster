import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CommentInput from '../components/CommentInput';
import TodayRoutineItem from '../components/TodayRoutineItem';
import { Checkbox } from '@mui/material';

const RoutineToday = () => {
    const [routines, setRoutines] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [checkedRoutines, setCheckedRoutines] = useState([]); // 체크된 루틴 ID 저장
    const [comment, setComment] = useState(''); // 코멘트 저장

    useEffect(() => {
        const fetchRoutines = async () => {
            try {
                const today = new Date().toISOString().split('T')[0];
                
                const response = await axios.get(`http://localhost:3000/api/date`, {
                    params: {
                        date: today
                    },
                    withCredentials: true
                });

                if (response.data.success) {
                    setRoutines(response.data.data.todaylist || []);
                    setError(null);
                } else {
                    throw new Error(response.data.message || "루틴 조회 실패");
                }
            } catch (error) {
                console.error("Failed to fetch routines:", error);
                setError(error.message || "루틴 조회 중 오류가 발생했습니다.");
            } finally {
                setLoading(false);
            }
        };

        fetchRoutines();
    }, []);

    // 체크박스 상태 변경 핸들러
    const handleCheck = (routineId) => {
        setCheckedRoutines(prev => {
            if (prev.includes(routineId)) {
                return prev.filter(id => id !== routineId);
            } else {
                return [...prev, routineId];
            }
        });
    };

    // 코멘트 변경 핸들러
    const handleCommentChange = (value) => {
        setComment(value);
    };

    // 저장 버튼 클릭 핸들러
    const handleSave = async () => {
        try {
            const today = new Date().toISOString().split('T')[0];

            // 체크된 루틴 저장
            const checkResponse = await axios.patch(`http://localhost:3000/api/date/check`, {
                date: today,
                checkedRoutineIds: checkedRoutines
            }, {
                withCredentials: true
            });

            // 코멘트 저장
            const commentResponse = await axios.patch(`http://localhost:3000/api/date/comment`, {
                date: today,
                comment: comment
            }, {
                withCredentials: true
            });

            if (checkResponse.data.success && commentResponse.data.success) {
                alert('성공적으로 저장되었습니다!🥳');
            }
        } catch (error) {
            console.error("저장 중 오류 발생:", error);
            alert('저장 중 오류가 발생했습니다.');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <div className="border-2 border-blue-200 rounded-2xl bg-white p-6 w-full max-w-2xl">
                <div className="space-y-4">
                    <div className="flex-1">
                        <div className="space-y-4">
                            {routines.map((routine, index) => (
                                <div key={index} className="flex items-center space-x-4">
                                    <Checkbox/>
                                    <TodayRoutineItem routine={routine} />
                                </div>
                            ))}
                        </div>

                        <div className="mt-6">
                            <CommentInput 
                                value={comment}
                                onChange={handleCommentChange}
                            />
                        </div>

                        <div className="mt-4 text-center">
                            <button 
                                onClick={handleSave}
                                className="px-6 py-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 transition-colors"
                            >
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
