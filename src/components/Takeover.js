import React, { useEffect, useState } from 'react'
import Confetti from 'react-confetti'
import { getFirestore, getDoc, setDoc, doc } from 'firebase/firestore/lite'
import { app } from './firebaseConfig'

export const Takeover = ({callback, time}) => {

  let [leaderboard, setLeaderboard] = useState([])
  let [leaderTable, setLeaderTable] = useState(null)
  let [playerName, setPlayername] = useState("")
  let [updatedLeaderboard, setUpdatedLeaderboard] = useState(null)
  let [submitted, setSubmitted] = useState(false)

  const db = getFirestore(app);

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

      //write to firebase

      let updateStorage = async () => {


        // Add a new message entry to the Firebase database.
        try {
            let docRef = doc(db, 'scoreboard', 'ltpQZkmzCTIx1Jj1SLRV')
            let withoutActive = updatedTable.map(({active, ...items}) => items)
            let jsonized = JSON.stringify(withoutActive)
            let data = {
                "currentScoreboard" : jsonized
            }
    
            await setDoc(docRef, data)
        }
        catch(error) {
          console.error('Error writing new message to Firebase Database', error);
        }
      }

      updateStorage()

      setSubmitted(true)

  }

  let updatePlayer = (event) => {
    setPlayername(event.target.value)
  }





  useEffect(() => {
    let getData = async () => {
      const db = getFirestore(app);
      let docRef = doc(db, 'scoreboard', 'ltpQZkmzCTIx1Jj1SLRV')
      const retrievedDoc = await getDoc(docRef)
      let retrieved = JSON.parse(retrievedDoc.data().currentScoreboard)
      setLeaderboard(retrieved)
      setSubmitted(false)

      let result = [...retrieved, {"initials" : "YOU", "time" : (time.hours * 360 + time.minutes * 60 + time.seconds),"active" : true}]
      let sorted = result.sort((val1, val2) => (val1.time > val2.time) ? 1 : (val1.time < val2.time) ? -1 : 0)
      setUpdatedLeaderboard(sorted)
      let result1 = []
      sorted.forEach((el, i) => {
          result1.push(<li key={i+"l1"} className="result-position">{i+1}</li>)
          result1.push(<li key={i+"l2"} className="result-initials">{el.initials}</li>)
          result1.push(<li key={i+"l3"} className="result-time">{new Date(el.time * 1000).toISOString().substring(14, 19)}</li>)
      })
      setLeaderTable(result1)
  }

  getData()
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
              <input type="text" minLength="2" maxLength="3" placeholder="Enter your initials"value={playerName} onChange={updatePlayer}></input>
              <button className="button-45">Submit</button>
            </form> : null}
           <button className="button-85" onClick={callback}>Start New Game?</button> 
          <Confetti/>

    </div>
  )
}


