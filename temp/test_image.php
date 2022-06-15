<?php
//echo "lkjnazlekjknaze";
$out=null;
$ret=null; 
echo date("Y/m/d H:i:s") . "<br>";

echo( "------------------"  . "<br>") ;
// /home/camfkox/temp/test_image.php
echo( "------------------"  . "<br>") ;
//echo( exec("whoami") . "<br>") ; 
echo( "------------------"  . "<br>") ;

$list=scandir("/home/camfkox/photos/") ; 
//print_r($list) ; 

//$a=null ;
foreach ($list as $a) {
    if (fnmatch("photo*.jpg",$a,0)) {
        //echo("$a" . "<br>") ; 
        echo("<div>") ; 
        echo("<a href=" . '"' . "/photos/"."$a" . '"' . " > " . "$a" .  "</a>"  );
        echo("<div>") ; 

    }
}
