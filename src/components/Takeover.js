import React, { useEffect, useState } from 'react'
import { leaderboard } from './DataLoader'
import Confetti from 'react-confetti'


export const Takeover = ({callback, time}) => {

  let [leaderTable, setLeaderTable] = useState(null)
  let [updatedLeaderBoard, setUpdatedLeaderBoard] = useState([])


  useEffect(() => {
    let result = [...leaderboard, {"initials" : "YOU", "time" : (time.hours * 360 + time.minutes * 60 + time.seconds)}]
    let something = result.sort((val1, val2) => (val1.time > val2.time) ? 1 : (val1.time < val2.time) ? -1 : 0)
    let result1 = []
    something.forEach((el, i) => {
        result1.push(<li key={i+"l1"} className="result-position">{i+1}</li>)
        result1.push(<li key={i+"l2"} className="result-initials">{el.initials}</li>)
        result1.push(<li key={i+"l3"} className="result-time">{el.time}</li>)
    })
    setLeaderTable(result1)
},[])



  return (
    <div id="takeover">
          <h1>You solved the puzzle!</h1>
          <h2>Your time was:
          {(time.minutes !== 0) ? time.minutes + "m ": null} {(time.seconds !== 0) ? time.seconds + "s" : null}</h2>
          <h4>Here's how your score compares to others</h4>
            <ul id="scoreboard">
              <li className="result-header">Position</li><li >Initials</li><li>Time</li>
              {leaderTable}
            </ul>
          <button onClick={callback}>Start New Game?</button>
          <Confetti/>

    </div>
  )
}
