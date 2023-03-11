import React from 'react'

export const Takeover = ({callback, time}) => {


  return (
    <div id="takeover">You finished in {time.seconds} seconds
        <button onClick={callback}>Start New Game?</button>
    </div>
  )
}
