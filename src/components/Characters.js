import React, { useState } from 'react'
import johnny from '../assets/johnny.png'
import owl from '../assets/owl.png'
import waldo from '../assets/waldo.png'


export const Characters = ({chars}) => {


  return (
    <div id="characters">
        <div className="char-select" style={{backgroundImage: `url(${chars[0].url})`}}></div>
        <div className="char-select" style={{backgroundImage: `url(${chars[1].url})`}}></div>
        <div className="char-select" style={{backgroundImage: `url(${chars[2].url})`}}></div>
    </div>
  )
}
