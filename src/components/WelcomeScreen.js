import React, { useState, useEffect } from 'react'
import { characters } from './DataLoader'
import { Game } from './Game'


export const WelcomeScreen = () => {

    let [active, setActive]  = useState(true)
    let [chars, setCharacters] = useState([])
    let [loaded, setLoaded] = useState(false)

    setTimeout(() => { 
        setLoaded(true)
    }, 5000)

    let startNewGame = () => {
        setActive(false)
    }

    let gameFinished = () => {
        setActive(true)
    }

    useEffect(() => {
        setCharacters(characters)
    },[])



  return (
    <div className="container">
        {!loaded && <div className="loader">
                        <div className="loader-inner">
                            <div className="loader-line-wrap"><div className="loader-line"></div></div>
                            <div className="loader-line-wrap"><div className="loader-line"></div></div>
                            <div className="loader-line-wrap"><div className="loader-line"></div></div>
                            <div className="loader-line-wrap"><div className="loader-line"></div></div>
                            <div className="loader-line-wrap"><div className="loader-line"></div></div>
                        </div>
                    </div>}
        { loaded && active ? (
            <div>
                <h1 className="gradient-text">WELCOME TO RAINBOW ROAD HUNT!</h1>
                <h2 className="gradient-text">Hit the button to draw your targets</h2>
                <div>
                    <div className="char"></div>
                    <div className="char"></div>
                    <div className="char"></div>
                </div>
                <button onClick={startNewGame}>Start New Game</button>
            </div>
        ) : null }
        {!active ? <Game chars={chars} gameFinished={gameFinished}/> : null}
        
    </div>
  )
}
