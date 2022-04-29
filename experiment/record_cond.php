<?php

// this path should point to your configuration file.
include('database_config.php');

$data_array = json_decode(file_get_contents('php://input'), true);

try {
  $conn = new PDO("mysql:host=$servername;port=$port;dbname=$dbname", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  $sql = "INSERT INTO `table_assign` (`parID`, `cond`) VALUES (:id, :cond)";

  $insertstmt = $conn->prepare($sql);
  $insertstmt->bindValue(":id", $data_array['parID']);
  $insertstmt->bindValue(":cond", $data_array['cond']);
  $insertstmt ->execute();
//  echo '{"success": true}';
} catch(PDOException $e) {
  echo '{"success": false, "message": ' . $e->getMessage();
}

$conn = null;


?>