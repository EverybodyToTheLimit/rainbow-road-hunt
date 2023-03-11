import React, { useState, useEffect } from 'react'
import { Characters } from './Characters'
import { MainBody } from './MainBody'
import image from '../assets/jagtdj95y8361.jpg'
import { Stopwatch } from './Stopwatch'
import { ContextMenu } from './ContextMenu'
import winCheck from './winCheck'
import { Takeover } from './Takeover'

export const Game = () => {

    let [counter, setCounter] = useState(null)
    let [tryAttempt, setTryAttemp] = useState({})
    let [characters, setCharacters] = useState([
        {"name" : "Johnny Bravo", "hit" : false, "url": "someurl"},
        {"name" : "Owl", "hit" : false, "url": "someurl"},
        {"name" : "Waldo", "hit" : false, "url": "someurl"}
    ])
    let [gameOver, setGameOver] = useState(false)


    useEffect(() => {
        if (characters.every(el => el.hit === true)) {
            setGameOver(true)
            if (counter === null) setCounter(currentCounter.val)
            console.log(currentCounter.val)
        }
    },[characters, gameOver])



    function catchTryAttempt (event) {
        setTryAttemp(event)

    }

    function callwinCheck  (payload) {
        if (winCheck(tryAttempt, payload)) {;
        const newCharacters = characters.map((c, i) => {
            if (c.name === payload) {
                return {...c, "hit": true}
            }
            else return c
        })
        setCharacters(newCharacters)
        }
    setTryAttemp([])
    console.log(characters)
    }

    function newGame () {
        setGameOver(false)
        setCharacters(
            [
                {"name" : "Johnny Bravo", "hit" : false, "url": "someurl"},
                {"name" : "Owl", "hit" : false, "url": "someurl"},
                {"name" : "Waldo", "hit" : false, "url": "someurl"}
            ]
        )
        setTryAttemp([])
        setCounter(null)
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
                <div>{JSON.stringify(tryAttempt)}</div>
                <Characters/>
            </div>
            <div id="main-section">
                <MainBody background={image} tryAttempt={catchTryAttempt}/>
                <ContextMenu coordinates={tryAttempt} check={callwinCheck} characters={characters}/>
            </div>
        </div>
        ) : null}
    </div>
  )
}
