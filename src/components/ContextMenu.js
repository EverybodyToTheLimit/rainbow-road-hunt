import React from 'react'


export const ContextMenu = ({coordinates}) => {

    

  return (
    <div id="context" style = {{
        position:"absolute",
        left: coordinates.pgx + 'px',         
        top: coordinates.pgy + 'px',
        height: "100px",
        width: "100px",
        backgroundColor: "black",
    }}></div>
  )
}
