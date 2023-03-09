import React from 'react';
import { useStopwatch } from 'react-timer-hook';
export const Stopwatch = () => {

    

// function MyStopwatch() {
//     const {
//       seconds,
//       minutes,
//       hours,
//       isRunning,
//       start,
//       reset,
//     } = useStopwatch({ autoStart: true });
  
// }
    const seconds = useStopwatch({autoStart: true}).seconds
    const minutes = useStopwatch({autoStart: true}).minutes
    const hours = useStopwatch({autoStart: true}).hours
  
      const leftDigitSeconds = seconds >= 10 ? seconds.toString()[0] : '0';
      const rightDigitSeconds = seconds >= 10 ? seconds.toString()[1] : seconds.toString();
  
      const leftDigitMinutes = minutes >= 10 ? minutes.toString()[0] : '0';
      const rightDigitMinutes = minutes >= 10 ? minutes.toString()[1] : minutes.toString();
  
      const leftDigitHours = hours >= 10 ? hours.toString()[0] : '0';
      const rightDigitHours = hours >= 10 ? hours.toString()[1] : hours.toString();
  
  
  
    return (
      <div style={{textAlign: 'center'}}>
        <div style={{fontSize: '100px'}}>
          <span className="counter">{leftDigitHours}</span>
          <span className="counter">{rightDigitHours}</span>
          <span className="counter-colon">:</span>
          <span className="counter">{leftDigitMinutes}</span>
          <span className="counter">{rightDigitMinutes}</span>
          <span className="counter-colon">:</span>
          <span className="counter">{leftDigitSeconds}</span>
          <span className="counter">{rightDigitSeconds}</span>
        </div>
      </div>
    );

  


}



