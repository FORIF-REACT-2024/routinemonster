import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import RoutineItem from "../components/RoutineItem";
import DeleteButton from "../components/DeleteButton";

const RoutineList = () => {
    const [routines, setRoutines] = useState([]); // 루틴 목록
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
    const [totalPages, setTotalPages] = useState(1); // 전체 페이지 수
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // 전체 루틴 목록 조회
    const fetchRoutines = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(
                `http://localhost:3000/api/routine/${currentPage}`,
                { withCredentials: true }
            );

            const { success, message, data } = response.data;

            if (success) {
                setRoutines(data.routineList || []); // 루틴 목록 업데이트
                setTotalPages(data.totalPages || 1); // 전체 페이지 수 업데이트
            } else {
                throw new Error(message || "루틴 조회 실패🥲");
            }
        } catch (err) {
            setError(err.message || "루틴 조회 중 문제가 발생했습니다😫");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRoutines();
    }, [currentPage]);

    // 페이지 변경 처리
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    // 루틴 추가 페이지로 이동
    const handleAddRoutine = () => {
        navigate("/Add");
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="rounded-2xl p-6 w-full max-w-2xl">
            {/* 루틴 목록 */}
            <div className="space-y-4">
                {Array.isArray(routines) && routines.length > 0 ? (
                    routines.map((routine) => (
                        <div key={routine.id} className="flex justify-between items-center space-x-4">
                            <RoutineItem
                                category={routine.category}
                                title={routine.title}
                                startDate={routine.startDate.split("T")[0]}
                                endDate={routine.endDate.split("T")[0]}
                                frequency={routine.times}
                                achievement={routine.completedTimes / routine.times}
                            />
                            <DeleteButton
                                routineId={routine.id}
                                onDelete={fetchRoutines} // 삭제 후 목록 새로고침
                            />
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">
                        등록된 루틴이 없습니다. 새로운 루틴을 추가하세요❗
                    </p>
                )}
            </div>

            {/* 페이지네이션 */}
            <Stack spacing={2} className="mt-4" alignItems="center">
                <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                    showFirstButton
                    showLastButton
                />
            </Stack>

            {/* 루틴 추가 버튼 */}
            <div className="mt-4 text-center">
                <button
                    className="px-6 py-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 transition-colors"
                    onClick={handleAddRoutine}>
                    추가하기
                </button>
            </div>
        </div>
    );
};

export default RoutineList;
