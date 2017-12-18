function travelToFlat(){
    document.getElementById("cave").setAttribute("visible","false");
    document.getElementById("flat").setAttribute("visible","true");
}

function travelToHome(){
    document.getElementById("flat").setAttribute("visible","false");
    document.getElementById("cave").setAttribute("visible","true");
}