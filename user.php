<?php
// Fill up array with names
$a[]="Anna";
$a[]="Annabelle";
$a[]="Dave";
$a[]="Alvin";
$a[]="Anita";
$a[]="Samuel";

// get the q parameter from URL
$q=$_REQUEST['q'];
//lookup all hints from array if length of q>0

$checker = false;
for($i=0; $i<count($a); $i++)
  {
  if (strtolower($a[$i])==strtolower($q)) {
  $checker=true;
}
}
//Set output to "no suggestion" if no hint were found
//or to the correct values
if ($checker == false)
{
$response="";
}
else
{
$response="Username is not Available!";
}
//output the response
echo $response;
?>