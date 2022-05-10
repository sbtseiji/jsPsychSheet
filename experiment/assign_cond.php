<?php

// this path should point to your configuration file.
include('database_config.php');

$data_array = json_decode(file_get_contents('php://input'), true);

try {
  $conn = new PDO("mysql:host=$servername;port=$port;dbname=$dbname", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  $sql = "SELECT cond, count(*) cnt FROM `table_assign` group by cond";
  $stmt = $conn->prepare($sql);
  $stmt->execute();
//  echo '{"success": true}';
} catch(PDOException $e) {
  echo '{"success": false, "message": ' . $e->getMessage();
}



while($row=$stmt->fetch(PDO::FETCH_ASSOC)){ //結果を配列で取得
  $condData[]=array(
      'cond'=>$row['cond'],
      'count'=>$row['cnt']
  );
}
echo json_encode($condData);

$conn = null;


?>