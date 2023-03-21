
let winCheck = (coordinates, character) => {
                
    let winningCoords = [
        {"name":"big-bird", "x" : 0.184, "xmin" : 0.166, "xmax" : 0.207, "y" : 0.445, "ymin" : 0.420, "ymax" : 0.466},
        {"name":"bugs-bunny", "x" : 0.513, "xmin" : 0.495, "xmax" : 0.540, "y" : 0.427, "ymin" : 0.405, "ymax" : 0.450},
        {"name":"catdog", "x" : 0.149, "xmin" : 0.089, "xmax" : 0.211, "y" : 0.985, "ymin" : 0.949, "ymax" : 0.999},
        {"name":"dora-maar", "x" : 0.583, "xmin" : 0.563, "xmax" : 0.618, "y" : 0.201, "ymin" : 0.193, "ymax" : 0.230},
        {"name":"dr-doom", "x" : 0.298, "xmin" : 0.270, "xmax" : 0.329, "y" : 0.608, "ymin" : 0.574, "ymax" : 0.628},
        {"name":"dr-manhattan", "x" : 0.390, "xmin" : 0.369, "xmax" : 0.410, "y" : 0.121, "ymin" : 0.105, "ymax" : 0.169},
        {"name":"eddy", "x" : 0.789, "xmin" : 0.769, "xmax" : 0.813, "y" : 0.820, "ymin" : 0.799, "ymax" : 0.837},
        {"name":"filthy-frank", "x" : 0.713, "xmin" : 0.696, "xmax" : 0.737, "y" : 0.693, "ymin" : 0.666, "ymax" : 0.719},
        {"name":"flash", "x" : 0.899, "xmin" : 0.876, "xmax" : 0.937, "y" : 0.933, "ymin" : 0.916, "ymax" : 0.958},
        {"name":"flying-dutchman", "x" : 0.227, "xmin" : 0.212, "xmax" : 0.255, "y" : 0.702, "ymin" : 0.666, "ymax" : 0.737},
        {"name":"hellboy", "x" : 0.883, "xmin" : 0.845, "xmax" : 0.891, "y" : 0.709, "ymin" : 0.684, "ymax" : 0.745},
        {"name":"jasper-beardly", "x" : 0.199, "xmin" : 0.182, "xmax" : 0.221, "y" : 0.793, "ymin" : 0.778, "ymax" : 0.812},
        {"name":"johnny", "x" : 0.201, "xmin" : 0.191, "xmax" : 0.212, "y" : 0.292, "ymin" : 0.260, "ymax" : 0.306},
        {"name":"kermit", "x" : 0.330, "xmin" : 0.309, "xmax" : 0.361, "y" : 0.737, "ymin" : 0.720, "ymax" : 0.756},
        {"name":"knuckles", "x" : 0.960, "xmin" : 0.941, "xmax" : 0.999, "y" : 0.130, "ymin" : 0.097, "ymax" : 0.162},
        {"name":"leonardo", "x" : 0.340, "xmin" : 0.323, "xmax" : 0.359, "y" : 0.574, "ymin" : 0.554, "ymax" : 0.600},
        {"name":"masterchief", "x" : 0.229, "xmin" : 0.192, "xmax" : 0.247, "y" : 0.500, "ymin" : 0.466, "ymax" : 0.522},
        {"name":"mordecai", "x" : 0.418, "xmin" : 0.393, "xmax" : 0.438, "y" : 0.519, "ymin" : 0.488, "ymax" : 0.554},
        {"name":"mr-burns", "x" : 0.160, "xmin" : 0.130, "xmax" : 0.179, "y" : 0.783, "ymin" : 0.762, "ymax" : 0.800},
        {"name":"mr-crabs", "x" : 0.899, "xmin" : 0.860, "xmax" : 0.934, "y" : 0.894, "ymin" : 0.856, "ymax" : 0.900},
        {"name":"owl", "x" : 0.252, "xmin" : 0.235, "xmax" : 0.277, "y" : 0.980, "ymin" : 0.963, "ymax" : 0.999},
        {"name":"ren-hoek", "x" : 0.750, "xmin" : 0.725, "xmax" : 0.780, "y" : 0.443, "ymin" : 0.419, "ymax" : 0.466},
        {"name":"skeeter-valentine", "x" : 0.360, "xmin" : 0.342, "xmax" : 0.379, "y" : 0.628, "ymin" : 0.593, "ymax" : 0.657},
        {"name":"spongebob-police", "x" : 0.060, "xmin" : 0.046, "xmax" : 0.077, "y" : 0.257, "ymin" : 0.235, "ymax" : 0.279},
        {"name":"squirtle", "x" : 0.346, "xmin" : 0.324, "xmax" : 0.365, "y" : 0.770, "ymin" : 0.753, "ymax" : 0.802},
        {"name":"sully", "x" : 0.384, "xmin" : 0.366, "xmax" : 0.400, "y" : 0.807, "ymin" : 0.785, "ymax" : 0.837},
        {"name":"waldo", "x" : 0.653, "xmin" : 0.643, "xmax" : 0.663, "y" : 0.050, "ymin" : 0.034, "ymax" : 0.063},
        {"name":"yellow-puffle", "x" : 0.557, "xmin" : 0.536, "xmax" : 0.574, "y" : 0.891, "ymin" : 0.860, "ymax" : 0.905},
        {"name":"yoshi", "x" : 0.286, "xmin" : 0.273, "xmax" : 0.309, "y" : 0.679, "ymin" : 0.655, "ymax" : 0.698},
        {"name":"zoidberg", "x" : 0.916, "xmin" : 0.895, "xmax" : 0.930, "y" : 0.809, "ymin" : 0.786, "ymax" : 0.819},
    
    ]

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