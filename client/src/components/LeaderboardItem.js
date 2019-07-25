import React from 'react';

const LeaderBoardItem = ({ name, score, date }) => {
    return (
        <div className="leaderboard__container">
                <div className='leaderboard__item'>User: {date}</div>
                <div className='leaderboard__item'>Score: {score}</div>
        </div>
    )
};

export default LeaderBoardItem;
