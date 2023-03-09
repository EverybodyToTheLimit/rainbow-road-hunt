import React from 'react'
import { Characters } from './Characters'
import { MainBody } from './MainBody'
import image from '../assets/jagtdj95y8361.jpg'
import { Stopwatch } from './Stopwatch'

export const Game = () => {
  return (
    <div className="container">
        <div className="header">
            <Stopwatch />
            <Characters />
        </div>
        <MainBody background={image}/>
    </div>
  )
}
