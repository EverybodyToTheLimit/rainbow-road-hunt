import React from 'react'

export const Takeover = ({callback}) => {


  return (
    <div id="takeover">Game over
        <button onClick={callback}>Start New Game?</button>
    </div>
  )
}
