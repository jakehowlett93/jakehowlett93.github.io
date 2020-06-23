import React from 'react';

const MovieSearchCard = () => {
    return (
        <div className="card">
            <h3 className="card-title">OMDb searcher</h3>
            <p className="card-subtitle">React Redux(thunk)</p>
            <img className="card-image" src={ require("../../../assets/current-project-thumbnail.png") } alt="current Project" />
        </div>
    );
};

export default MovieSearchCard;