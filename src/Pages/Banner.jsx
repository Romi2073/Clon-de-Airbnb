import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "./Search";
import "../Stylesheets/banner.css"

const Banner = () => {
    const navigate = useNavigate();
    const [showSearch, setShowSearch] = useState(false);

    const handleSearchButtonClick = () => {
        setShowSearch(!showSearch);
    };

    const handleExploreNearbyClick = () => {
        navigate('/search');
    };

    return (
        <div className='banner'>
            <div className='banner__search'>
                {showSearch && <Search />}
                <button onClick={handleSearchButtonClick} className='banner__searchButton'>
                    {showSearch ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2 2m0 0l2-2m-2 2v-3" />
                        </svg>
                    )}
                    {showSearch ? "Hide" : "Search Dates"}
                </button>
            </div>
            <div className='banner__info'>
                <h1>Get out and stretch your imagination</h1>
                <h5>
                    Plan a different kind of getaway to uncover the hidden gems near you.
                </h5>
                <button onClick={handleExploreNearbyClick}>Explore Nearby</button>
            </div>
        </div>
    );
};

export default Banner;
