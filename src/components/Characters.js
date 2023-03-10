import React from 'react'

export const Characters = ({result}) => {
  return (
    <div id="characters">
        <div>{JSON.stringify(result)}</div>
        <div>Character2</div>
        <div>Character3</div>
    </div>
  )
}
