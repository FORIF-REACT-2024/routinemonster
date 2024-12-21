import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CommentInput from '../components/CommentInput';
import TodayRoutineItem from '../components/TodayRoutineItem';
import { Checkbox } from '@mui/material';
import { useOutletContext } from 'react-router-dom';

const RoutineToday = () => {
    const [routines, setRoutines] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [checkedRoutines, setCheckedRoutines] = useState([]); // 체크된 루틴 ID 저장
    const [comment, setComment] = useState(''); // 코멘트 저장
    const { darkMode } = useOutletContext();

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
    const now = new Date();
    const today = `${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, '0')}-${String(now.getUTCDate()).padStart(2, '0')}`;

    try {
        // 체크된 루틴 저장 전 로그
        if (checkedRoutines.length > 0) {
            console.log('체크된 루틴 저장 시도:', {
                date: today,
                checkedRoutineIds: checkedRoutines
            });
        }

        // 코멘트 저장 전 로그
        if (comment) {
            console.log('코멘트 저장 시도:', {
                date: today,
                comment: comment
            });

            const response = await axios.patch(
                'http://localhost:3000/api/date/comment',
                {
                    date: today,
                    comment: comment.trim()
                },
                {
                    withCredentials: true
                }
            );

            // 응답 로그
            console.log('서버 응답:', response.data);
        }

        alert('저장되었습니다! 🐥');
    } catch (error) {
        // 자세한 에러 정보
        console.error('에러 전체 정보:', error);
        console.error('응답 데이터:', error.response?.data);
        console.error('에러 상태:', error.response?.status);
        alert('저장 안됨 ㅁㅊ거');
    }
};

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <div className="rounded-2xl p-6 w-full max-w-2xl">
                <div className="space-y-4">
                    <div className="flex-1">
                        <div className="space-y-4">
                            {routines.map((routine, index) => (
                                <div key={index} className="flex items-center space-x-4">
                                    <Checkbox/>
                                    <TodayRoutineItem routine={routine} darkMode={darkMode} />
                                </div>
                            ))}
                        </div>

                        <div className="mt-6">
                            <CommentInput 
                                value={comment}
                                onChange={handleCommentChange}
                                darkMode={darkMode}
                            />
                        </div>

                        <div className="mt-4 text-center">
                            <button 
                                onClick={handleSave}
                                className={`px-6 py-2 ${darkMode ? 'bg-gray-700 text-blue-50 hover:bg-gray-600' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'} rounded-md transition-colors`}
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