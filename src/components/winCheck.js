

let winCheck = (coordinates, character) => {


    let winningCoords = [{"name": "Johnny Bravo", "x" : 0.20, "xmin" : 0.19, "xmax" : 0.21, "y" : 0.29, "ymin" : 0.28, "ymax" : 0.30},
                        {"name": "Waldo", "x" : 0.65, "xmin" : 0.64, "xmax" : 0.66, "y" : 0.05, "ymin" : 0.04, "ymax" : 0.06},
                        {"name": "Owl", "x" : 0.25, "xmin" : 0.24, "xmax" : 0.26,  "y" : 0.98, "ymin" : 0.97, "ymax" : 0.99}]
                
    

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