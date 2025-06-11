<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include_once 'core/db_connect.php';

//Set the default view
$view = '';

// print_r($_GET);

//Check if the view is set in the URL and not empty
if (!empty($_GET['view'])) {
    $view = htmlspecialchars($_GET['view']);
    $view = str_replace("/", "", $view);
}

$page = '';
$style = '';
$js = '';

switch ($view){
    case '';
        $page = 'home.php';
        $style = 'home.css';
        $js = 'home.js';
        break;
    case 'home';
        $page = 'home.php';
        $style = 'home.css';
        $js = 'home.js';
        break;
    default:
        $page = '404.php';
        $style = '404.css';
        $js = '404.js';
        break;
}

require_once "./views/" . $page;
