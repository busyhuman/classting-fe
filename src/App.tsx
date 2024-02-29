import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Quiz from './quiz/Quiz'
import Note from './note/Note'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/note" element={<Note />} />
    </Routes>
  )
}

export default App
