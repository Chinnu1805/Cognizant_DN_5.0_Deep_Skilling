import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore(props) {

    const score = ((props.Total / props.goal) * 100).toFixed(2);

    return (
        <div className="container">
            <h1>Student Details:</h1>

            <h3>
                <span className="name">Name:</span> {props.Name}
            </h3>

            <h3>
                <span className="school">School:</span> {props.School}
            </h3>

            <h3>
                <span className="total">Total:</span> {props.Total} Marks
            </h3>

            <h3>
                <span className="score">Score:</span> {score}%
            </h3>
        </div>
    );
}

export default CalculateScore;