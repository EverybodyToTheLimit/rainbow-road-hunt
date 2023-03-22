import React from 'react'


export const ContextMenu = ({coordinates, check, characters}) => {



    let feedback = (char) => {
        check(char)
    }


    let edgeCases = (loc) => {
        if (coordinates.x / coordinates.elx < 0.13) {
            return loc + "-edgex"
        }
        else if (coordinates.x / coordinates.elx > 0.87) {
            return loc + "-edgey"
        }
        else return loc
    }

    if (Object.keys(coordinates).length === 0) {return null}
    else {
    return (
    <div id="context" style = {{
        position:"absolute",
        left: coordinates.pgx + 'px',         
        top: coordinates.pgy + 'px',
    }}>

        <div id="target"></div>
        <button style={{ backgroundImage: `url(${characters[0].url})`}} onClick={() => feedback(characters[0].name)} id={edgeCases("left")} className="char bounce-in"></button>
        <button style={{backgroundImage: `url(${characters[1].url})`}} onClick={() => feedback(characters[1].name)} id={edgeCases("mid")} className="char bounce-in"></button>
        <button style={{backgroundImage: `url(${characters[2].url})`}} onClick={() => feedback(characters[2].name)} id={edgeCases("right")} className="char bounce-in"></button>
    </div>
  )
    }
}
