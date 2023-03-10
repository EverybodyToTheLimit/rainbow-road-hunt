import React from 'react'


export const ContextMenu = ({coordinates, check}) => {

    let feedback = () => {
        check([coordinates, "Johnny Bravo"])
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
        <button onClick={feedback}className="char">First Character</button>
        <button className="char">Second Character</button>
        <button className="char">Third Character</button>
    </div>
  )
}
