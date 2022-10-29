const ws = new WebSocket("ws://example-ip/ws");

ws.onmessage = function(evt){
    console.log("message from esp32");

    today = new Date;

    hours = today.getHours();
    minutes = today.getMinutes();
    seconds = today.getSeconds();
    horario = hours + ":" + minutes + ":" + seconds;

    day = today.getDate();
    month = today.getMonth() + 1;
    data = day + "/" + month;

    data_horario = data + " " + horario;

    document.getElementById("id1").innerHTML = evt.data;
    document.getElementById("data1").innerHTML = data_horario; 

    if(evt.data == "6A A9 B0 A3")
    {
        document.getElementById("estado1").innerHTML = "Liberado";
    }

    else
    {
        document.getElementById("estado1").innerHTML = "Negado";
    }

    var xhr = new XMLHttpRequest();

    xhr.open("POST", "index.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var data = document.getElementById("id1").innerHTML;
    xhr.send(`value1=${data}`);
}