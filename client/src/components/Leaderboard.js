import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchScores } from '../actions';
import LeaderboardItem from './LeaderboardItem';

const Leaderboard = ({ scores, fetchScores }) => {
    const { name, score, date } = scores;

    useEffect(() => {
        fetchScores();
    },[])

    const renderList = () => {
        return scores.map(item => {
            console.log(item)
            return <LeaderboardItem key={item.id} name={item.name} score={item.score} date={item.date}/>
        })
    }

    return (
        <div className="leaderboard">
            <h1 className='leaderboard__header'> Leaderboard</h1>
            {renderList()}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        scores: Object.values(state.scores)
    };
};

export default connect(mapStateToProps, { fetchScores })(Leaderboard);
