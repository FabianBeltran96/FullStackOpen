import React, { useState } from 'react'
import ReactDOM from 'react-dom/client';

const Button = ({ text, handleClick }) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

const MostVote = ({ anecdotes, points }) => {

  let mostVote = Math.max(...points)
  let posMostVote = points.indexOf(mostVote)

  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[posMostVote]}</p>
      <p>has {mostVote} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0, 0, 0])


  const randomAnecdote = () => {
    setSelected(Math.floor(Math.random() * 7))
  }

  const addVote = () => {
    let copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }


  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes </p>
      <Button handleClick={randomAnecdote} text={"Next"}></Button>
      <Button handleClick={addVote} text={"Vote"} ></Button>
      <MostVote anecdotes={anecdotes} points={points}></MostVote>
    </div >
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

