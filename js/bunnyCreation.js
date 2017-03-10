'use strict'

window.onload = init;

function init(){
    addEvents()
    $("#submit_form").click(createBunny)
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
    var error = document.getElementById("errorLabel")
    error.style.visibility = "hidden"

    if(speedVal != "" && speedVal <= initPoints){
        initPoints -= parseInt(speedVal)
    } else if(speedVal > initPoints){
        error.style.visibility = "visible"
        initPoints = 0
    }
    if(distanceVal != "" && distanceVal <= initPoints){
        initPoints -= parseInt(distanceVal)
    } else if(distanceVal > initPoints){
        error.style.visibility = "visible"
        initPoints = 0
    }
    if(restVal != "" && restVal <= initPoints){
        initPoints -= parseInt(restVal)
    } else if(restVal > initPoints){
        error.style.visibility = "visible"
        initPoints = 0
    }
    document.getElementById("points").innerHTML = initPoints
}

function createBunny(){
    let posturl = $("#frm").attr("action");
    console.log(`localhost:1234${posturl}`)
    $.post(posturl, $(':input').serialize());
}