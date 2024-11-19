import React, { useState } from 'react';
import Profile from '../components/Profile';
import RoutineItem from '../components/RoutineItem';
import OngoingButton from '../components/OngoingButton';
import DeleteButton from '../components/DeleteButton';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

const RoutineList = () => {
    const routines = Array(30).fill({
        type: '운동',
        description: '5km 실적 앞고 달리기',
        startDate: '2024-11-01',
        endDate: '2024-11-19',
        frequency: '3',
        status: 'ongoing'
    });

    const itemsPerPage = 7;
    const totalPages = Math.ceil(routines.length / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);
    const [statusFilter, setStatusFilter] = useState('ongoing');

    const filteredRoutines = routines.filter(routine => routine.status === statusFilter);

    const currentRoutines = filteredRoutines.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const handleStatusChange = (status) => {
        setStatusFilter(status);
        setCurrentPage(1);
    };

    const navigate = useNavigate();

    const handleAddRoutine = () => {
        navigate('/Add');
    };

    return (
        <div className="max-w-5xl mx-auto">
                <div className="flex gap-4">
                    <div className="flex-1">
                        <div className="border-2 border-blue-200 rounded-2xl bg-white p-6">
                            <div className="mb-6">
                                <h2 className="text-3xl font-bold text-center">🌼 루틴 목록 🌼</h2>
                            </div>

                            <div className="flex space-x-4 mb-4">
                                <OngoingButton 
                                    type="ongoing" 
                                    onClick={handleStatusChange} 
                                    selected={statusFilter === 'ongoing'} 
                                />
                                <OngoingButton 
                                    type="completed" 
                                    onClick={handleStatusChange} 
                                    selected={statusFilter === 'completed'} 
                                />
                                <OngoingButton 
                                    type="upcoming" 
                                    onClick={handleStatusChange} 
                                    selected={statusFilter === 'upcoming'} 
                                />
                            </div>

                            <div className="space-y-4">
                                {currentRoutines.map((routine, index) => (
                                    <div key={index} className="flex justify-between items-center space-x-4"> 
                                    <RoutineItem
                                        type={routine.type}
                                        description={routine.description}
                                        period={routine.period}
                                        frequency={routine.frequency}
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
                    </div>
                </div>
            </div>
    );
};

export default RoutineList;
