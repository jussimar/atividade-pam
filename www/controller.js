// This is a JavaScript file

function confirmGroundControl(){
    positionSucccess = function(position){
        var controlPanel = document.getElementById("controlPanel");
        var altitude;
        var date = Date().toString().toLowerCase();
        if(position.coords.altitude == null) altitude = "Nivel do mar";
        else altitude = position.coords.altitude;
        controlPanel.innerHTML +=  "-- GETTING MAIN COORDENATES --<br> " + date  + "<br>"+ "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude + "<br>Altitude: " + altitude + "<br>";
        controlPanel.style("visibility", "visible");
    }
    positionError = function(error){
        navigator.notification.alert("Um erro ocorreu: " + error);
    }

    var location_notificated = navigator.geolocation.getCurrentPosition(positionSucccess, positionError);
}

function notificate(){
    navigator.notification.confirm("O controle de voo quer saber sua localizacao", confirmGroundControl, "Controle de voo", "OK");
    confirmGroundControl();
}

function onBug(){
    try{
        confirmGroundControl();
    }
    catch(error){ alert(error);}
}

function starter(){
    var controlPanel = document.getElementById("controlPanel");
    controlPanel.innerHTML += "-- STARTING SYSTEM --<br>";
    controlPanel.innerHTML += "-- MAJOR FREE TO USE --<br>";
}