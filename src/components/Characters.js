import React, { useState } from 'react'
import johnny from '../assets/johnny.png'
import owl from '../assets/owl.png'
import waldo from '../assets/waldo.png'


export const Characters = () => {

    let [characters, setCharacters] = useState([
        {"name" : "Johnny Bravo", "hit" : false, "url": johnny},
        {"name" : "Owl", "hit" : false, "url": owl},
        {"name" : "Waldo", "hit" : false, "url": waldo}
    ])


  return (
    <div id="characters">
        <div>Character1</div>
        <div>Character2</div>
        <div>Character3</div>
    </div>
  )
}
