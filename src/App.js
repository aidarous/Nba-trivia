import React, { useState } from 'react';
import './App.css';
import Questions from './components/Questions';
import data from './components/data'


function App() {
const [trivia, setTrivia] = useState(data);
  return (
    <div className="App">
     <h1>Welcome to NBA trivia </h1>
     <div className="container">
     {trivia.map((question) =>{
        return <Questions key={question.id} {... question} />
      })}
     </div>
     
    </div>
  );
}

export default App;
