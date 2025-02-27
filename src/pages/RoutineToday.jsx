import React, { useEffect, useState } from "react";
import axios from "axios";
import CommentInput from "../components/CommentInput";
import TodayRoutineItem from "../components/TodayRoutineItem";
import { Checkbox } from "@mui/material";
import { useOutletContext } from "react-router-dom";

const RoutineToday = () => {
    const [routines, setRoutines] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [comment, setComment] = useState("");
    const { darkMode } = useOutletContext();

    useEffect(() => {
        const fetchRoutines = async () => {
            try {
                const today = new Date().toISOString().split("T")[0];
                const response = await axios.get(`http://localhost:3000/api/date`, {
                    params: { date: today },
                    withCredentials: true,
                });

                if (response.data.success) {
                    const fetchedRoutines = response.data.data.todaylist || [];
                    // 각 루틴에 checked 속성을 명시적으로 추가
                    setRoutines(fetchedRoutines.map(routine => ({ ...routine, checked: false })));
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

    const handleCheckboxChange = (routineId) => {
        setRoutines(prevRoutines => prevRoutines.map(routine => 
            routine.id === routineId ? { ...routine, checked: !routine.checked } : routine
        ));
    };

    const handleCommentChange = (value) => {
        setComment(value);
    };

    const handleSave = async () => {
        try {
            const today = new Date().toISOString().split("T")[0];
            
            // 체크된 루틴만 필터링하여 ID 배열 생성
            const checkedRoutines = routines.filter(routine => routine.checked === true);
            const checkedRoutineIds = checkedRoutines.map(routine => routine.id);
            
            console.log('체크된 루틴들:', checkedRoutines);
            console.log('체크된 루틴 IDs:', checkedRoutineIds);

            if (checkedRoutineIds.length > 0) {
                await axios.patch('http://localhost:3000/api/date/check', {
                    date: today,
                    checkedRoutineIds,
                }, { withCredentials: true });
                
                console.log('체크된 루틴 저장 완료:', checkedRoutineIds);
            } else {
                console.log("체크된 루틴이 없습니다.");
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
                    },{ withCredentials: true}
                );

                if (response.status === 200) {
                    alert("코멘트 저장 완료✔️");
                }
            }
        } catch (error) {
            console.error('에러 전체 정보:', error);
            console.error('응답 데이터:', error.response?.data); 
            alert('저장 안됨 ㅜㅜ');
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
                            {routines.length > 0 ? (
                                routines.map((routine) => (
                                    <div key={routine.id} className="flex items-center space-x-4">
                                        <Checkbox
                                            checked={routine.checked}
                                            onChange={() => handleCheckboxChange(routine.id)}
                                        />
                                        <TodayRoutineItem routine={routine} darkMode={darkMode} />
                                    </div>
                                ))
                            ) : (
                                <div>오늘의 루틴이 없습니다.</div>
                            )}
                        </div>

                        <div className="mt-6">
                            <CommentInput value={comment} onChange={handleCommentChange} darkMode={darkMode} />
                        </div>

                        <div className="mt-4 text-center">
                            <button
                                onClick={handleSave}
                                className={`px-6 py-2 ${
                                    darkMode ? "bg-gray-700 text-blue-50 hover:bg-gray-600" : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                                } rounded-md transition-colors`}
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