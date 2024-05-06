import React, { useState } from 'react';
import { useNavigate} from "react-router-dom";

// DATE PICKER COMPONENT
function Search() {
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    };

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    };

    return (
        <div className="flex flex-col items-center justify-center mt-8">
            <div className="w-72 p-4 border rounded-lg">
                <h2 className="text-lg font-bold mb-2">Select Dates</h2>
                <div className="flex items-center justify-between mb-4">
                    <label className="text-gray-600">Start Date</label>
                    <input
                        type="date"
                        className="border border-gray-300 rounded px-2 py-1"
                        value={startDate}
                        onChange={handleStartDateChange}
                    />
                </div>
                <div className="flex items-center justify-between mb-4">
                    <label className="text-gray-600">End Date</label>
                    <input
                        type="date"
                        className="border border-gray-300 rounded px-2 py-1"
                        value={endDate}
                        onChange={handleEndDateChange}
                    />
                </div>
                <h2 className="text-lg font-bold mb-2">Number of guests</h2>
                <input
                    min={0}
                    defaultValue={2}
                    type="number"
                    className="border border-gray-300 rounded px-2 py-1 mb-4"
                />
                <button onClick={() => navigate.push('/search')} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Search Airbnb</button>
            </div>
        </div>
    )
}

export default Search;
