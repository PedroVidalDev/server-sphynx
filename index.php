<?php
    $p2 = $_POST["value1"];

    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "esp32";

    $conn = new mysqli($servername, $username, $password, $database);

    if (!$conn){
        die("Error: " . mysqli_connect_error());
    }

    echo "Conected with mysql";

    $sql = "INSERT INTO rfiddata (uid) VALUES ('$p2')";

    if (mysqli_query($conn, $sql)){
        echo "New data created";
    }

    else {
        echo "Erro: " . $sql . "<br>" . mysqli_error($conn);
    }

    mysqli_close($conn);
?>
