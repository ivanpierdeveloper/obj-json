<?php
/*     header('Access-Control-Allow-Origin: *'); // IMPORTANTE CORS “Access-Control-Allow-Origin” mancante
    header("Access-Control-Expose-Headers: Content-Length, X-JSON");
    header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization, Accept, Accept-Language, X-Authorization");
    header('Access-Control-Max-Age: 86400');
 */    header('Content-Type: application/json; charset=UTF-8');

    /*
    try {
        if($_SERVER['REQUEST_METHOD'] === 'POST') {
            //$POST = filter_var_array($_POST, FILTER_SANITIZE_STRING);
            // throw new Exception("Messaggio", 200);
            echo '[
                    {
                        "id1" : '.json_encode($_POST['body']).',
                        "id2" : "nil"
                    }
                ]';
        } // ./POST
    } catch(Exception $error) {
        echo '[
            {
                "id1"  : "'.$error->getMessage().'",
                "id2" : "'.$error->getCode().'"
            }
            ]';
    }
    */
    try {
        if($_SERVER['REQUEST_METHOD'] === "PUT") {
            $input_data = json_decode(file_get_contents('php://input'), true);
            //$output_data = ['encoded' => md5($input_data['string'])]; // non serve
            $output_data = $input_data['receive']; //filter_var_array($input_data['receive'], FILTER_SANITIZE_STRING); // nota: funziona con entrambi i modi
            // tutto
            $json_all = json_encode($output_data);
            // singoli
            $json_only_one = json_encode($output_data[0]['id']);
            
            echo $json_all;
        } // ./PUT
        else {
            throw new Exception("Non è una chiamata PUT", 5477);
        }
    } catch (Exception $error) {
        // senza indici
        /* echo '{
            "message" : "'.$error->getMessage().'",
            "code" :     '.$error->getCode().'
        }'; */
        // con indici
        echo '[{
            "message" : "'.$error->getMessage().'",
            "code" :     '.$error->getCode().'
        }]';
    }