import { useState } from 'react';

export default function TimeSelector() {
    const [selectedTime, setSelectedTime] = useState('0시');

    const handleChange = (event) => {
        setSelectedTime(event.target.value);
    };

    // 0시부터 23시까지의 시간 배열 생성
    const times = Array.from({ length: 24 }, (_, i) => `${i}시`);

    return (
        <div className="h-screen">
            <select
                value={selectedTime}
                onChange={handleChange}
                className="w-40 h-7 px-2 border border-blue-200 rounded-md text-lg"
            >
                {times.map((time) => (
                    <option key={time} value={time}>
                        {time}
                    </option>
                ))}
            </select>
        </div>
    );
}