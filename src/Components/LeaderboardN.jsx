import React, { useEffect, useState } from 'react';

const LeaderboardN = () => {
    const [leaderboardData, setLeaderboardData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch leaderboard data from the API endpoint
        fetch('http://127.0.0.1:5000/leaderboard')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch leaderboard data');
                }
                return response.json();
            })
            .then(data => {
                setLeaderboardData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching leaderboard data:', error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    return (
        <div className='bg-yellow-100 h-screen w-screen'>
           <h1 className=" font-display text-orange-900 pt-10 sm:pt-36  text-center font-Vsoc  text-3xl font-extrabold leading-none tracking-tight md:text-5xl  lg:text-6xl ">
       Leaderboard
      </h1>
            {/* {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <div className="space-y-4">
                    {leaderboardData.length > 0 ? (
                        leaderboardData.map((participant, index) => (
                            <p key={index} className="text-lg">{index + 1}. {participant[0]} - Score: {participant[1]}</p>
                        ))
                    ) : (
                        <p>No participants found in the database.</p>
                    )}
                </div>
            )} */}

            <h1 className='flex justify-center items-center text-xl pt-10'>Will be updated soon!!</h1>
        </div>
    );
};

export default LeaderboardN;