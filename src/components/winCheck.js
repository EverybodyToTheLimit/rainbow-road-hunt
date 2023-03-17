import { winningCoords } from "./DataLoader"



let winCheck = (coordinates, character) => {
                
    

    let resultx = coordinates.x / coordinates.elx
    let resulty = coordinates.y / coordinates.ely

    let targetxMin = winningCoords.find(({name}) => name === character).xmin
    let targetxMax = winningCoords.find(({name}) => name === character).xmax
    let targetyMin = winningCoords.find(({name}) => name === character).ymin
    let targetyMax = winningCoords.find(({name}) => name === character).ymax

    if (resultx > targetxMin && resultx < targetxMax && resulty > targetyMin && resulty < targetyMax) {
        return true
    }
    else {
        return false
    }

}


export default winCheck