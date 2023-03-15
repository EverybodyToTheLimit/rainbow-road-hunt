import cross from '../assets/cross.svg'

export const Characters = ({chars}) => {


if (chars.length === 0) return null
else
  return (
    <div id="characters">
        <div className="char-select" style={{backgroundImage: `url(${chars[0].url})`}}>
            {chars[0].hit ? <img className="cross bounce-in" src={cross}></img> : null}
        </div>
        <div className="char-select" style={{backgroundImage: `url(${chars[1].url})`}}>
            {chars[1].hit ? <img className="cross bounce-in" src={cross}></img> : null}
        </div>
        <div className="char-select" style={{backgroundImage: `url(${chars[2].url})`}}>
            {chars[2].hit ? <img className="cross bounce-in" src={cross}></img> : null}
        </div>
    </div>
  )
}
