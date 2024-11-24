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
    const [statusFilter, setStatusFilter] = useState('ongoing');
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    
    const itemsPerPage = 7;

    useEffect(() => {
        const fetchRoutines = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(
					'http://localhost:3000/api/routine', {
					params: { status: statusFilter, page: currentPage },
					withCredentials: true,
				});
				

                if (response.status === 200 && response.data.success) {
                    // 응답 데이터에서 routinelist와 totalPages 추출
                    setRoutines(response.data.data.routinelist || []);
                    setTotalPages(response.data.data.totalPages || 1);
                } else {
                    throw new Error(response.data.message || '루틴 불러오기 실패🥲');
                }
            } catch (err) {
                setError(err.message || 'Something went wrong');
            } finally {
                setLoading(false);
            }
        };

        fetchRoutines();
    }, [currentPage, statusFilter]);

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

                <div className="space-y-4">
                    {routines.map((routine, index) => (
                        <div key={index} className="flex justify-between items-center space-x-4">
                            <RoutineItem
                                type={routine.category}
                                description={routine.title}
                                period={`${routine.startDate} ~ ${routine.endDate}`}
                                frequency={routine.times}
                            />
                            <DeleteButton />
                        </div>
                    ))}
                </div>

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
