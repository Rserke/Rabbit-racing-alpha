'use strict'

window.onload = init;

function init(){
    addEvents()
}

function addEvents(){
    document.getElementById("speed").oninput = totalPoints
    document.getElementById("distance").oninput = totalPoints
    document.getElementById("rest").oninput = totalPoints

    document.getElementById("speed").onfocus = totalPoints
    document.getElementById("distance").onfocus = totalPoints
    document.getElementById("rest").onfocus = totalPoints
}

function totalPoints(){
    var initPoints = 100
    var speedVal = document.getElementById("speed").value
    var distanceVal = document.getElementById("distance").value
    var restVal = document.getElementById("rest").value

    if(speedVal != "" && speedVal <= initPoints){
        initPoints -= parseInt(speedVal)
    } else if(speedVal > initPoints){
        document.getElementById("speedError").style.visibility = "visible"
    }
    if(distanceVal != "" && distanceVal <= initPoints){
        initPoints -= parseInt(distanceVal)
    } else if(distanceVal > initPoints){
        document.getElementById("distanceError").style.visibility = "visible"
    }
    if(restVal != "" && restVal <= initPoints){
        initPoints -= parseInt(restVal)
    } else if(restVal > initPoints){
        document.getElementById("restError").style.visibility = "visible"
    }
    document.getElementById("points").innerHTML = initPoints
}