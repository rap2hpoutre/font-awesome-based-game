<?php
require '../vendor/autoload.php';
$app = new \Slim\Slim();

$app->get('/', function () use ($app) {
	$app->render('index.html');
});

$app->run();