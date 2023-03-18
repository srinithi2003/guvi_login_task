<?php
require '../vendor/autoload.php';

$redis=new Redis();

$redis->connect('localhost',6379);

if($redis->get('email')==null){


$servername = "localhost";
$username = "root";
$password = "";
$dbname="guvi";

// Create connection
$conn = new mysqli($servername, $username, $password,$dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

    $email=$_POST['email'];
    $pass=$_POST['pass'];
    
$sql = "INSERT INTO register1(email,pass)VALUES('$email','$pass')";
if($conn->query($sql) === TRUE) {
 

  //echo "registered successfully";

  $redis->set('email',$email);
  echo $redis->get('email');
  // connect to mongodb

  $m = new MongoDB\Client;
//    echo "Connection to database successfully";
 
  // select a database
  $db = $m->profile;
//  echo "Database mydb selected";
  $collection = $db->profile_details;
// echo "Collection selected succsessfully";


  if($_POST){
   
  $document = array( 
    "email" => $_POST["email"], 
     "fname" => $_POST["fname"], 
     "lname" => $_POST["lname"],
     "age" => $_POST["age"],
     "contact" => $_POST["contact"]
  );
 
  $collection->insertone($document);
  echo "Document inserted successfully";


  $redis->set('start',date('Y/m/d H:i:s'));
  }
  else{
  echo "nooo";
}

} else {

  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

    
  

    }
    else{
      echo "already registred";
    }




?>