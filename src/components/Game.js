import React, { useState } from 'react'
import { Characters } from './Characters'
import { MainBody } from './MainBody'
import image from '../assets/jagtdj95y8361.jpg'
import { Stopwatch } from './Stopwatch'
import { ContextMenu } from './ContextMenu'
import winCheck from './winCheck'

export const Game = () => {

    

    let [tryAttempt, setTryAttemp] = useState([])
    let [characters, setCharacters] = useState([
        {"name" : "Johnny Bravo", "hit" : false, "url": "someurl"},
        {"name" : "Owl", "hit" : false, "url": "someurl"},
        {"name" : "Waldo", "hit" : false, "url": "someurl"}
    ])



    function catchTryAttempt (event) {
        setTryAttemp(event)

    }

    function callwinCheck  (payload) {
        if (winCheck(tryAttempt, payload)) {;
        const newCharacters = characters.map((c, i) => {
            if (c.name === payload) {
                let newObj = {...c}
                newObj.hit = true
                console.log(newObj)
                return {newObj}
            }
            else return c
        })
        setCharacters(newCharacters)
        }
    console.log(characters)
    }



  return (
    <div className="container">
        <div className="header">
            <Stopwatch />
            <div>{JSON.stringify(tryAttempt)}</div>
            <Characters result={tryAttempt}/>
        </div>
        <div id="main-section">
            <MainBody background={image} tryAttempt={catchTryAttempt}/>
            <ContextMenu coordinates={tryAttempt} check={callwinCheck} characters={characters}/>
        </div>
    </div>
  )
}
