<?php

    include './vista.php';

    if(isset($_POST["cargaFigura"])){
        try {            
            if(!isset($_FILES["archivo"])){
                throw new Exception("Error en el envío del fichero");
            }
        $file = $_FILES["archivo"];
        //var_dump($file);

        if($file['size']>25000000){
            throw new Exception("Error, el archivo es demasiado grande");
        }

        $fileInfo = finfo_open(FILEINFO_MIME_TYPE);

        $ext = array_search(finfo_file($fileInfo, $file['tmp_name']),array("stl"=>"application/octet-stream"));       
        finfo_close($fileInfo);

        if($ext === false){
            unset($file);
            throw new Exception( "Archivo no soportado");
        }

        if(!file_exists('../media/tmp/')){
            mkdir('../media/tmp/');
        } else{
            rmdir('../media/tmp/');
            mkdir('../media/tmp/');
        }

        $upload = move_uploaded_file($file['tmp_name'], "../media/tmp/prueba.". $ext);
        
        if(!$upload){
            throw new Exception( "El archivo ".$file['name']." no se pudo subir"); 
        }else{
            $script =   "<script>
                            loadFigure('../media/tmp/prueba.stl');
                        </script>";

            $error= "<h6>Archivo ".$file['name']." cargado correctamente</h6>";
        }

        //var_dump($ext);
        } catch (Exception $th) {
            //$error = $th->getMessage();
            show3dPrint($th->getMessage(),"");
        };

        ?>
    
    <script>
        
    </script>
    <?php
    
    } else {
        ?>
    
    <?php
    }

    show3dPrint($error,$script);

    
    
        

?>