
<?php
$redis=new Redis();

$redis->connect('localhost',6379);

echo $redis->get('email');
// //$redis->set('start',date('Y/m/d H:i:s'));
// $redis->set('end',date('Y/m/d H:i:s'));


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

//checking for email and password present in mysql

if(isset($_POST['search_post_btn']))
{

    $mail=$_POST['email'];
    $pass=$_POST['pass'];
    
    $sql = "SELECT * from register1 where email='$mail' and pass='$pass'";

    // echo $mail;
 
      $result = $conn->query($sql);
    if ($result->num_rows == 1) {

    //if login details present in mysql->login success
    $redis->set('email',$mail);
    echo "user present";
    }


    else{
       echo 'no user';
    }


}

//logout
else{
  $redis->flushAll();
}

$conn->close();

 ?>


