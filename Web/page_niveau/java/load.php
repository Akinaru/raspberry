<?php

	$root = 'root';
    $pass = '';
    $dbname= 'baskarcade';
    $table = 'points';


    try {

        
        $db = new PDO('mysql:host=localhost;dbname=' . $dbname, $root, $pass);

		$result = $db->query('SELECT MAX(id) FROM '.$table);
        $numRows = $result->fetchColumn();
        echo 'result: '. $numRows;
        
	} catch (PDOException $e) {
        echo 'Erreur: ' . $e->getMessage();
    }


?>
