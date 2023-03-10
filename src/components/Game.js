import React, { useState } from 'react'
import { Characters } from './Characters'
import { MainBody } from './MainBody'
import image from '../assets/jagtdj95y8361.jpg'
import { Stopwatch } from './Stopwatch'
import { ContextMenu } from './ContextMenu'

export const Game = () => {

    let [tryAttempt, setTryAttemp] = useState([])

    function catchTryAttempt (event) {
        setTryAttemp(event)
    }


  return (
    <div className="container">
        <div className="header">
            <Stopwatch />
            <Characters result={tryAttempt}/>
        </div>
        <div>
            <MainBody background={image} tryAttempt={catchTryAttempt}/>
            <ContextMenu coordinates={tryAttempt}/>
        </div>
    </div>
  )
}
