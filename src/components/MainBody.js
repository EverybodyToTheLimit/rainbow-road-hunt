import React from 'react'
import useMouse from '@react-hook/mouse-position'

export const MainBody = ({background, tryAttempt}) => {

    const target = React.useRef(null);
    const mouse = useMouse(target, {
        fps: 30,
        enterDelay: 100,
        leaveDelay: 100
      });
    


    let handleClick = () => {

        tryAttempt({
            "x": mouse.x, 
            "y": mouse.y, 
            "elx": mouse.elementWidth, 
            "ely": mouse.elementHeight,
            "clx": mouse.clientX,
            "cly": mouse.clientY,
            "pgx": mouse.pageX,
            "pgy": mouse.pageY
        })
    }

  return (
    <div> 
    <div>{JSON.stringify(mouse.x)} + {JSON.stringify(mouse.y)} + {JSON.stringify(mouse.elementWidth)} + {JSON.stringify(mouse.elementHeight)}</div>
    <img alt="main" id="main-body" ref={target} onClick={handleClick} src={background}></img>
    </div>
  )
}
