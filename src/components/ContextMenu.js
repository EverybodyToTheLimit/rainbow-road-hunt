import React from 'react'


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
        <button
        style={{
            backgroundImage: `url(${characters[0].url})` 
        }} 
        onClick={() => feedback(characters[0].name)} id="left" className="char bounce-in"></button>
        
        
        <button 
        style={{
            backgroundImage: `url(${characters[1].url})` 
        }} 
        
        onClick={() => feedback(characters[1].name)} id="mid" className="char bounce-in"></button>
        <button 
        style={{
            backgroundImage: `url(${characters[2].url})` 
        }} 
        
        onClick={() => feedback(characters[2].name)} id="right" className="char bounce-in"></button>
    </div>
  )
    }
}
