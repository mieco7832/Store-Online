<?php

include_once 'class/controller.php';

$Controller = new Controller();
if(!isset($_REQUEST['r'])){
  $Controller->index();
}

 ?>
