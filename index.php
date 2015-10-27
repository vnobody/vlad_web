<?php
    $requestedURI = $_SERVER['REQUEST_URI'];

    function getTemplate($URI) {
        $uriParts = explode("kringel.ee/", $URI);
        $fileName = $uriParts[1] . ".html";
        //die($fileName);
        if (file_exists($fileName)) {
            die('yes');
        } else {
            die("no");
        }
        print_r($uriParts);
    }

    getTemplate($requestedURI);
    print_r($requestedURI);
    exit;