<?php 
require '../vendor/autoload.php';

$redis=new Redis();

$redis->connect('localhost',6379);
if($redis){

$m = new MongoDB\Client;
//    echo "Connection to database successfully";
 
  // select a database
  $db = $m->profile;
//  echo "Database mydb selected";
  $collection = $db->profile_details;
// echo "Collection selected succsessfully";


$r=$redis->get('email');



if($_POST){
  echo $_POST["hi"];
  $up=$collection->updateOne(
    ["email"=>$r],
    ['$set'=>["fname"=>$_POST["fname"],"lname"=>$_POST["lname"],"age"=>$_POST["age"],"contact"=>$_POST["contact"]]]
  );

  // printf("Matched %d document(s)\n", $up->getMatchedCount());
  // printf("Modified %d document(s)\n", $up->getModifiedCount());



}
else{
  
  $dis=$collection->findOne(
   ['email'=>$r]
  );


$data=array(
  'fname'=>$dis["fname"],
  'lname'=>$dis["lname"],
  'age'=>$dis["age"],
  'contact'=>$dis["contact"],
);

echo json_encode($data);
}

// $a=array();
//   foreach($dis as $ri){
//     array_push($a,(string)$ri);
//    //var_dump($r); 
//   }
  //print_r($a);



}
?>