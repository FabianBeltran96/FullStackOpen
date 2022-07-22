import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistic = ({ text, value }) => {
  return (
    <tbody>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </tbody>
  )
}

const Statistics = ({ good, bad, neutral }) => {

  let all = bad + neutral + good

  let average = all !== 0 ? (good - bad) / (all) : 0;

  let positivie = all !== 0 ? (good / (all) * 100) : 0;

  if (good + bad + neutral === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>)
  }

  return (
    <div>
      <Statistic text={"good"} value={good}></Statistic>
      <Statistic text={"neutral"} value={neutral}></Statistic>
      <Statistic text={"bad"} value={bad}></Statistic>

      <Statistic text={"all"} value={all}></Statistic>
      <Statistic text={"average"} value={average}></Statistic>
      <Statistic text={"positivie"} value={positivie}></Statistic>
    </div>
  )
}



const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addOne = (value, setValue) => setValue(value + 1)

  return (
    <div>

      <h1>Give feedback</h1>

      <Button handleClick={() => addOne(good, setGood)} text={"good"}></Button>
      <Button handleClick={() => addOne(neutral, setNeutral)} text={"neutral"}></Button>
      <Button handleClick={() => addOne(bad, setBad)} text={"bad"}></Button>

      <h1>statistics</h1>

      <Statistics good={good} bad={bad} neutral={neutral}></Statistics>

    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
