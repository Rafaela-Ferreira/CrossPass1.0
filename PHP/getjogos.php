<?php
    $dbUser = "root";
    $dbPassword = "ifsp";
    $dbName = "bd_loja_games";
    $dbHost = "localhost";
    $connection = mysqli_connect($dbHost, $dbUser, $dbPassword, $dbName);
    if($connection){
        $query = "select idJogo, NomeJogo, image from jogo;";
        $results = mysqli_query($connection, $query);
        // Entregar os dados para quem pediu
        $jogos = [];
        $index = 0;
        while($record = mysqli_fetch_row($results)){
            $jogo = new stdClass();
            $jogo->id = $record[0];
            $jogo->name = $record[1];
            $jogo->image = $record[2];
            $jogos[$index] = $jogo;
            $index = $index + 1;
        }
        echo json_encode($jogos);
    }else{
        echo "<br />Conexão não efetuada";
        echo "<br />". mysqli_connect_error();
    }
?>