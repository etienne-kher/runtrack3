<?php 
	$bd=mysqli_connect("localhost","root","","utilisateurs");
	$req="SELECT * FROM utilisateurs;";
	$query=mysqli_query($bd,$req);
	$res=mysqli_fetch_all($query, MYSQLI_ASSOC);;
	$a=json_encode($res);
	echo $a;
	
?>
<!DOCTYPE html>
<html>
<head>
	<title>job04 </title>
	<meta charset="utf-8">
	<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
	<script  type="text/javascript" src="script.js" async="true"></script>
</head>
<body>
	
</body>
</html>