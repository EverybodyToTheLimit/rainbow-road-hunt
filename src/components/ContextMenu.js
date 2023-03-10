import React from 'react'


export const ContextMenu = ({coordinates, check, characters}) => {

    if (coordinates.length === 0 ) {return null}

    let feedback = (char) => {
        check(char)
    }

  return (
    <div id="context" style = {{
        position:"absolute",
        left: coordinates.pgx + 'px',         
        top: coordinates.pgy + 'px',
        height: "100px",
        width: "100px",
        backgroundColor: "black",
    }}>
        <button onClick={() => feedback(characters[0].name)} className="char">{characters[0].name}</button>
        <button onClick={() => feedback(characters[1].name)} className="char">{characters[1].name}</button>
        <button onClick={() => feedback(characters[2].name)} className="char">{characters[2].name}</button>
    </div>
  )
}
