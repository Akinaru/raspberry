<?php
$status = $_GET['status'];
$argument = $_GET['argument'];

shell_exec("C:\Users\maxim\AppData\Local\Programs\Python\Python39\python main.py ".$status." ".$argument);
echo ('status: '. $status. ' et argument: '.$argument);
?>