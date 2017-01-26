<?php

$var = '16 903.88';
$var=str_replace(' ','',$var);
$var=str_replace('"."','","',$var);
$float_value_of_var = floatval($var);
echo $float_value_of_var;