<?php 
	$state = $_GET['state'];
	$pin = $_GET['pin'];
	$exec = shell_exec ("sudo python test.py $state $pin");
	echo $exec;
?>
