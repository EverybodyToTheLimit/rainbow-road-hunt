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
    let [starting, setStarting] = useState("")

    
    
    setTimeout(() => { 
        setLoaded(true)
    }, 2000)

    let startNewGame = () => {
        setChar1Loaded(true)
        setChar2Loaded(true)
        setChar3Loaded(true)
        setTimeout(() => { setChar1Loaded(chosenCharacters[0].url)}, 2000)
        setTimeout(() => { setChar2Loaded(chosenCharacters[1].url)}, 4000)
        setTimeout(() => { setChar3Loaded(chosenCharacters[2].url)}, 6000)
        setTimeout(() => { setStarting("Get ready!")}, 8000)
        setTimeout(() => { setActive(false)
                            setStarting("")
        }, 12000)
    }

    let gameFinished = () => {
        setLoaded(false)
        setChar1Loaded(false)
        setChar2Loaded(false)
        setChar3Loaded(false)
        setActive(true)
        setChosenCharacters(_.sampleSize(characters, 3))
    }

    useEffect(() => {
        setChosenCharacters(_.sampleSize(characters, 3))
    },[])



  return (
    <div className="main-container">
         {starting ? <div id="starting" className="gradient-text">{starting}</div> : null}
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
                    <div style={{backgroundImage: `url(${char1Loaded})`}} className={(char1Loaded === true) ? "char-loader char-welcome" : "char-welcome"}></div>
                    <div style={{backgroundImage: `url(${char2Loaded})`}} className={(char2Loaded === true) ? "char-loader char-welcome" : "char-welcome"}></div>
                    <div style={{backgroundImage: `url(${char3Loaded})`}} className={(char3Loaded === true) ? "char-loader char-welcome" : "char-welcome"}></div>
                </div>
                <button className="button-85" onClick={startNewGame}>Start New Game</button>
            </div>
        ) : null }
        {!active ? <Game chars={chosenCharacters} gameFinished={gameFinished}/> : null}
        
    </div>
  )
}
