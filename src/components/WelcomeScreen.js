import React, { useState, useEffect } from 'react'
import { characters } from './DataLoader'
import { Game } from './Game'
import _ from 'lodash'


export const WelcomeScreen = () => {

    let [active, setActive]  = useState(true)
    let [chars, setCharacters] = useState([])
    let [loaded, setLoaded] = useState(false)
    let [chosenCharacters, setChosenCharacters] = useState([])
    let [char1Loaded, setChar1Loaded] = useState(false)
    let [char2Loaded, setChar2Loaded] = useState(false)
    let [char3Loaded, setChar3Loaded] = useState(false)

    
    
    setTimeout(() => { 
        setLoaded(true)
    }, 2000)

    let startNewGame = () => {
        // setChosenCharacters(_.sampleSize(chars, 3))   use Loadash in prod
        setTimeout(() => { setChar1Loaded(chars[0].url)}, 2000)
        setTimeout(() => { setChar2Loaded(chars[1].url)}, 4000)
        setTimeout(() => { setChar3Loaded(chars[2].url)}, 6000)
        setTimeout(() => { setActive(false)}, 10000)
    }

    let gameFinished = () => {
        setLoaded(false)
        setChar1Loaded(false)
        setChar2Loaded(false)
        setChar3Loaded(false)
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
            <div className="welcome-container">
                <h1 className="gradient-text">WELCOME TO RAINBOW ROAD HUNT!</h1>
                <h2 className="gradient-text">Hit the button to draw your targets</h2>
                <div className="char-container">
                    <div style={{backgroundImage: `url(${char1Loaded})`}} className="char"></div>
                    <div style={{backgroundImage: `url(${char2Loaded})`}} className="char"></div>
                    <div style={{backgroundImage: `url(${char3Loaded})`}} className="char"></div>
                </div>
                <button onClick={startNewGame}>Start New Game</button>
            </div>
        ) : null }
        {!active ? <Game chars={chars} gameFinished={gameFinished}/> : null}
        
    </div>
  )
}
