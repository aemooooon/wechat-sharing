<?php
require_once "jssdk.php";
$jssdk = new JSSDK("", "");

header('Content-type: application/json');
ob_start();

$url =htmlspecialchars($_GET['url']);
function CheckUrl($C_url){  
    $str="/^http(s?):\/\/(?:[A-za-z0-9-]+\.)+[A-za-z]{2,4}(?:[\/\?#][\/=\?%\-&~`@[\]\':+!\.#\w]*)?$/";  
    if (!preg_match($str,$C_url)){  
        return false;  
    }else{  
    return true;  
    }  
}  
if(!CheckUrl($url)) exit;

$signPackage = $jssdk->GetSignPackage($url);

$json['url'] = $signPackage["url"];
$json['appid'] = $signPackage["appId"];
$json['noncestr'] = $signPackage["nonceStr"];
$json['timestamp'] = $signPackage["timestamp"];
$json['signature'] = $signPackage["signature"];

$json = json_encode($json);
echo $json;
?>
