function signout(element){
    if (element.innerText == "Sign In"){
        element.innerText = "Sign Out"
        document.getElementById("left-comlun").style.display = "block"
        document.getElementById("right-comlun").style.display = "block"
    }
    else{
        element.innerText ="Sign In"
        document.getElementById("left-comlun").style.display = "none"
        document.getElementById("right-comlun").style.display = "none"
    }
}

function disappear(id,){
    document.getElementById(id).remove()
}
function deleteRequests(id){
    let updatedRequests = Number(document.getElementById(id).innerText) - 1
    document.getElementById(id).innerHTML = updatedRequests
}

function addConnection(id){
    let updatedNotifications = Number(document.getElementById(id).innerText) + 1
    document.getElementById(id).innerHTML = updatedNotifications
}

function changeColor(id){
    if (document.getElementById(id).src.match("icons/accept-circle.png")){
        document.getElementById(id).style.backgroundColor = "rgb(0, 255, 0)"
    }
    else {
        document.getElementById(id).style.backgroundColor = "rgb(255, 55, 55)"
    }   
}
function reset(id){
    document.getElementById(id).style.backgroundColor = ""
}

function changeUser(id){
    if (document.getElementById(id).innerText == "Adrian M."){
        document.getElementById(id).innerText = "Spider-Man (Miles Morales)"
    }
    else{
        document.getElementById(id).innerText = "Adrian M."
    }
}
function changeImage(id) {
    if (document.getElementById(id).src.match("icons/user-circle.png")) {
        document.getElementById(id).src = "icons/user-circle2.png";
    }
    else {
        document.getElementById(id).src = "icons/user-circle.png"
    }
}
