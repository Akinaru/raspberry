<?php
$status = $_GET['status'];
$argument = $_GET['argument'];

shell_exec("python main.py ".$status." ".$argument);

echo ('status: '. $status. ' et argument: '.$argument);
?>
