import React, { Component } from 'react';


const trivia = ["What city does LeBron james play in?", "In what division are the Dallas Mavericks?"," What team played in Oakland and now plays in San Francisco?"]
console.log(trivia);
class Questions extends Component {
    render() {
        return (
            <div>
                <p>{trivia[0]}</p>
                <p>{trivia[1]}</p>
                <p>{trivia[2]}</p>

            </div>
        );
    }
}

export default Questions;