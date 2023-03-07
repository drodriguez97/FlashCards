import { useState } from 'react'
import './App.css'
import FlashCardList from './components/FlashCardList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <div className="header">
            <h1>United State Trivia Questions</h1>
            <h3>Test you knowledge about the history of the United States with trivia questions</h3>       
        </div>

        <div className="container">
          <FlashCardList />
        </div>
    </div>
  )
}

export default App