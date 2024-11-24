import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import RoutineItem from '../components/RoutineItem';
import DeleteButton from '../components/DeleteButton';

const RoutineList = () => {
    const [routines, setRoutines] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const itemsPerPage = 6; // 한 페이지당 아이템 개수

    useEffect(() => {
        const fetchRoutines = async () => {
            setLoading(true);
            setError(null);
    
            try {
                const response = await axios.get(
                    'http://localhost:3000/api/routine',
                    {
                        params: { page: currentPage },
                        withCredentials: true,
                    }
                );
    
                if (response.status === 200 && response.data.success) {
                    const { routinelist } = response.data.data;
    
                    // 모든 objective 배열을 하나로 합치기
                    const mergedObjectives = routinelist.flatMap((item) => item.objective);
    
                    setRoutines(mergedObjectives); // 합쳐진 배열로 루틴 설정
                    setTotalPages(response.data.data.totalPages || 1);
                } else {
                    throw new Error(response.data.message || '루틴 불러오기 실패');
                }
            } catch (err) {
                setError(err.message || 'Something went wrong');
            } finally {
                setLoading(false);
            }
        };
    
        fetchRoutines();
    }, [currentPage]);
    
    

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const handleAddRoutine = () => {
        navigate('/Add');
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="border-2 border-blue-200 rounded-2xl bg-white p-6 w-full max-w-2xl">
            {/* 루틴 목록 */}
            <div className="space-y-4">
                {routines.length > 0 ? (
                    routines.map((routine) => (
                        <div key={routine.id} className="flex justify-between items-center space-x-4">
                            <RoutineItem
                                category={routine.category}
                                title={routine.title}
                                startDate={routine.startDate.split('T')[0]}
                                endDate={routine.endDate.split('T')[0]}
                                frequency={routine.times}
                                achievement={routine.completedTimes / routine.times}
                            />
                            <DeleteButton routineId={routine.id} />
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">등록된 루틴이 없습니다. 새로운 루틴을 추가하세요!</p>
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