import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchScores } from '../actions';
import LeaderboardItem from './LeaderboardItem';

const Leaderboard = (props) => {

    useEffect(() => {
        props.fetchScores();
    },[]);

    const renderList = () => {
         return props.scores && props.scores.map(item => {
            return <LeaderboardItem key={item.date} score={item.score} date={item.date} />
        })
    }

    return (
        <div className="leaderboard">
            <h1 className='leaderboard__header'> Leaderboard</h1>
            {renderList()}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        scores: Object.values(state.scores)
    };
};

export default connect(mapStateToProps, { fetchScores })(Leaderboard);
