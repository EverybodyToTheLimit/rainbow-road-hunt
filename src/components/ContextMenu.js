import React, { useEffect, useRef, useState } from 'react'


export const ContextMenu = ({coordinates, check, characters}) => {



    let feedback = (char) => {
        check(char)
    }

    if (Object.keys(coordinates).length === 0) {return null}
    else {
    return (
    <div id="context" style = {{
        position:"absolute",
        left: coordinates.pgx - 75 + 'px',         
        top: coordinates.pgy - 75 + 'px',
    }}>
        <div id="target"></div>
        <button onClick={() => feedback(characters[0].name)} id="left" className="char bounce-in">{characters[0].name}</button>
        <button onClick={() => feedback(characters[1].name)} className="char bounce-in">{characters[1].name}</button>
        <button onClick={() => feedback(characters[2].name)} id="right" className="char bounce-in">{characters[2].name}</button>
    </div>
  )
    }
}
