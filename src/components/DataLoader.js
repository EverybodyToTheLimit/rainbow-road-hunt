import johnny from '../assets/johnny.png'
import owl from '../assets/owl.png'
import waldo from '../assets/waldo.png'


let DataLoader = () => {


    let winningCoords = [
        {"name": "Johnny Bravo", "x" : 0.20, "xmin" : 0.19, "xmax" : 0.21, "y" : 0.29, "ymin" : 0.28, "ymax" : 0.30},
        {"name": "Waldo", "x" : 0.65, "xmin" : 0.64, "xmax" : 0.66, "y" : 0.05, "ymin" : 0.04, "ymax" : 0.06},
        {"name": "Owl", "x" : 0.25, "xmin" : 0.24, "xmax" : 0.26,  "y" : 0.98, "ymin" : 0.97, "ymax" : 0.99}]



    }

    
    let characters = [
       {"name" : "Johnny Bravo", "hit" : false, "url": johnny},
       {"name" : "Owl", "hit" : false, "url": owl},
       {"name" : "Waldo", "hit" : false, "url": waldo}
       ]
    

export {
DataLoader,
characters
}