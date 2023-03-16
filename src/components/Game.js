import React, { useState, useEffect } from 'react'
import { Characters } from './Characters'
import { MainBody } from './MainBody'
import image from '../assets/jagtdj95y8361.jpg'
import { Stopwatch } from './Stopwatch'
import { ContextMenu } from './ContextMenu'
import winCheck from './winCheck'
import { Takeover } from './Takeover'
import { noArray } from './nope'
import _ from 'lodash'

export const Game = ({chars, gameFinished}) => {

    let [counter, setCounter] = useState(null)
    let [tryAttempt, setTryAttemp] = useState({})
    let [characters, setCharacters] = useState([])
    let [gameOver, setGameOver] = useState(false)
    let [nope, setNope] = useState("")


    

    useEffect(() => {
        if (characters.length !== 0 && characters.every(el => el.hit === true)) {
            setGameOver(true)
            if (counter === null) setCounter(currentCounter.val)

        }
    },[characters, gameOver])
    
    useEffect(() => {
        setCharacters(chars)
    },[])


    function catchTryAttempt (event) {
        setTryAttemp(event)

    }

    function callwinCheck  (payload) {
        if (winCheck(tryAttempt, payload)) {
        const newCharacters = characters.map((c) => {
            if (c.name === payload) {
                return {...c, "hit": true}
            }
            else 
            return c
            
        })
        setCharacters(newCharacters)
        }
        else {
            setTryAttemp([])
            setNope(_.sample(noArray))
            setTimeout(() => { setNope("")}, 500)
        }

    }

    function newGame () {
        gameFinished()
    }


    let currentCounter = {}

    function updateCounter (val)  {
        currentCounter = {val}
    }



  return (
    <div className="container">
        { gameOver ? (
        <Takeover callback={newGame} time={counter}/>
        ) : null}
        { !gameOver ? (
        <div>
            <div className="header">
                <Stopwatch updateCounter={updateCounter}/>
                <Characters chars={characters}/>
            </div>
            <div id="main-section">
                {nope ? <div id="nope">{nope}</div> : null}
                <MainBody background={image} tryAttempt={catchTryAttempt}/>
                <ContextMenu coordinates={tryAttempt} check={callwinCheck} characters={characters}/> 
            </div>
        </div>
        ) : null}
    </div>
  )
}
