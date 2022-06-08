<?php

    $root = 'root';
    $pass = '';
    $dbname= 'baskarcade';
    $table = 'points';


    try {
      
        $db = new PDO('mysql:host=localhost;dbname=' . $dbname, $root, $pass);
        $result = $db->query('SELECT COUNT(*) AS num_rows FROM '.$table);
        $numRows = $result->fetchColumn();
        echo $numRows;

    } catch (PDOException $e) {
        echo 'Erreur: ' . $e->getMessage();
    }


?>
