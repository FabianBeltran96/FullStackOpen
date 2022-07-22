import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Panel = ({ text, value }) => {
  return (
    <p>{text} {value}</p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addOne = (value, setValue) => setValue(value + 1)

  let all = bad + neutral + good

  let average = all !== 0 ? (good - bad) / (all ) : 0;

  let positivie = all !== 0 ? (good / (all) * 100) : 0; 

  return (
    <div>

      <h1>Give feedback</h1>

      <Button handleClick={() => addOne(good, setGood)} text={"good"}></Button>
      <Button handleClick={() => addOne(neutral, setNeutral)} text={"neutral"}></Button>
      <Button handleClick={() => addOne(bad, setBad)} text={"bad"}></Button>

      <h1>statistics</h1>

      <Panel text={"good"} value={good}></Panel>
      <Panel text={"neutral"} value={neutral}></Panel>
      <Panel text={"bad"} value={bad}></Panel>

      <Panel text={"all"} value={all}></Panel>
      <Panel text={"average"} value={average}></Panel>
      <Panel text={"positivie"} value={positivie}></Panel>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)