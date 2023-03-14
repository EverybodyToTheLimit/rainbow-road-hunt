import React, { useState, useEffect } from 'react'
import { characters } from './DataLoader'
import { Game } from './Game'


export const WelcomeScreen = () => {

    let [active, setActive]  = useState(true)
    let [chars, setCharacters] = useState([])

    let toggleState = () => {
        (active) ? setActive(false) : setActive(true)
    }

    let startNewGame = () => {
        toggleState()
    }

    let gameFinished = () => {
        toggleState()
    }

    useEffect(() => {
        setCharacters(characters)
    },[])


  return (
    <div>
        { active ? (
            <div>
                <button onClick={startNewGame}>Start New Game</button>
            </div>
        ) : <Game chars={chars} gameFinished={gameFinished}/>}
    </div>
  )
}
