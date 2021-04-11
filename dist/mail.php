<?php

$recepient = "dr.shpynev@yandex.ru";
$siteName = "Свадьба full";

$name = trim($_POST['name']);
$surname = trim($_POST['surname']);

$furshet = trim($_POST['furshet']);
$house = trim($_POST['house']);
$nightHouse = trim($_POST['nightHouse']);
$atnone = trim($_POST['atnone']);

$vine = trim($_POST['vine']);
$vodka = trim($_POST['vodka']);
$cognac = trim($_POST['cognac']);
$shamp = trim($_POST['shamp']);
$sam = trim($_POST['sam']);
$sidr = trim($_POST['sidr']);
$beer = trim($_POST['beer']);
$energetic = trim($_POST['energetic']);
$water = trim($_POST['water']);

$message = "Имя: $name.$surname \n Придет $furshet.$house.$nightHouse.$atnone \n Будет пить: $vine.$vodka.$cognac.$shamp.$sam.$sidr.$beer.$energetic.$water";

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>