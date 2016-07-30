<?php

header('Content-Type: application/json');

include "country_list.php";

if(isset($_POST['fname']))
{
 /*Pers info*/   
	$fn=$_POST['fname'];
	$sn=$_POST['sname'];

	$addr="Addr.:";
	if (!empty($_POST['street'])){
		$addr=$addr." ".$_POST['street'];
	};
	if (!empty($_POST['city'])){
		$addr=$addr." ".$_POST['city'];
	};
	$country=$countries[$_POST['country']];
	$addr=$addr." ".$country."<br>";

	$tel='';
	if (!empty($_POST['tel'])){
		$tel="Tel.: ".$_POST['tel'];
		if (!empty($_POST['tel2']))
			$tel=$tel.", ".$_POST['tel2'];
		$tel=$tel.'<br>';
	}
	$email='';
	if (!empty($_POST['email'])){
		$email="Email: ".$_POST['email']."<br>";
	}
	$website='';
	if (!empty($_POST['web1'])){
		$website="Website: ".$_POST['web1'];
	}
	$w=2;
	while (isset($_POST['web'.$w]) && !empty($_POST['web'.$w])){
		$website=$website." | ".$_POST['web'.$w];
		$w++;
	}
/*edu*/
$education='';
/*work*/
$workexp='';

    $doc_body='<head>
	<meta charset="UTF-8">
	<title>Curriculum vitae</title>
	<style type="text/css">
		body{font-family:Calibri;}
		table{table-layout: fixed; width: 100%; border-collapse:collapse;}
		th {width:300px;word-wrap: break-word; text-align: right; border-right:solid 1px #999; padding-right: 10px;}
		td{padding-left: 10px;}
	</style>
</head>
<body>
    <h2 style="text-align: center;">Curriculum vitae</h2>
	<table>
		<tr><th scope="row"></th><td><h3>'.$fn.' '.$sn.'</h3>
		'.$addr.$tel.$email.$website.'</td></tr>
  		<tr><th scope="row">Education</th><td></td></tr>'
  		.$education.
  		'<tr><th scope="row">Work experience</th><td></td></tr>'
  		.$workexp.
 	'</table>
</body>';
 
//echo($_SERVER['PHP_SELF']);
    header("Content-Type: application/vnd.msword");
	header("Expires: 0"); //no-cache
	header("Cache-Control: must-revalidate, post-check=0, pre-check=0");//no-cache
	header("content-disposition: attachment;filename=sampleword.doc");
}
	echo "<html>";
	echo "$doc_body";
	echo "</html>";


?>