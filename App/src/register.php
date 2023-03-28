<?php
  session_start();
  include "../src/connect.php";
  $fullname = mysqli_real_escape_string($conn,$_POST["FullName"]);
  echo $fullname;
?>
