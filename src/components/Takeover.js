import React, { useEffect, useState } from 'react'
import Confetti from 'react-confetti'

export const Takeover = ({callback, time}) => {

  let [leaderTable, setLeaderTable] = useState(null)
  let [playerName, setPlayername] = useState("")
  let [updatedLeaderboard, setUpdatedLeaderboard] = useState(null)
  let [submitted, setSubmitted] = useState(false)


  let leaderboard = [
    {"initials" : "BAR", "time": 6},
    {"initials" : "BAZ", "time": 18},
    {"initials" : "BOO", "time": 123},
  ]

  let updateLeaderboard = (event) => {
      event.preventDefault();
      let updatedTable = [...updatedLeaderboard]
      const index = updatedTable.findIndex((el) => el.active === true )
      updatedTable[index].initials = playerName
      
      let result1 = []
      updatedTable.forEach((el, i) => {
      result1.push(<li key={i+"l1"} className="result-position">{i+1}</li>)
      result1.push(<li key={i+"l2"} className="result-initials">{el.initials}</li>)
      result1.push(<li key={i+"l3"} className="result-time">{new Date(el.time * 1000).toISOString().substring(14, 19)}</li>)
    })

      setLeaderTable(result1)
      setSubmitted(true)
  }

  let updatePlayer = (event) => {
    setPlayername(event.target.value)
  }

  useEffect(() => {
    setSubmitted(false)
    let result = [...leaderboard, {"initials" : "YOU", "time" : (time.hours * 360 + time.minutes * 60 + time.seconds),"active" : true}]
    let something = result.sort((val1, val2) => (val1.time > val2.time) ? 1 : (val1.time < val2.time) ? -1 : 0)
    setUpdatedLeaderboard(something)
    let result1 = []
    something.forEach((el, i) => {
        result1.push(<li key={i+"l1"} className="result-position">{i+1}</li>)
        result1.push(<li key={i+"l2"} className="result-initials">{el.initials}</li>)
        result1.push(<li key={i+"l3"} className="result-time">{new Date(el.time * 1000).toISOString().substring(14, 19)}</li>)
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
          { !submitted ? <form onSubmit={updateLeaderboard}>
              <input type="text" value={playerName} onChange={updatePlayer}></input>
              <button>submit</button>
            </form> : null}
           <button className="button-85" onClick={callback}>Start New Game?</button> 
          <Confetti/>

    </div>
  )
}
