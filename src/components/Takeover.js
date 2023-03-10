import React from 'react'

export const Takeover = ({state, callback}) => {

  if (!state) return null


  return (
    <div id="takeover">Some instructions
        <button onClick={callback}>Go to Game</button>
    </div>
  )
}
