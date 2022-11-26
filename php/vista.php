<?php

function show3dPrint($mensaje="",$script=""){
?>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>3Dimensional</title>
        <link rel="stylesheet" href="../style/style.css">

        <script src="http://threejs.org/build/three.min.js"></script>
        <script src="http://threejs.org/examples/js/controls/OrbitControls.js"></script>
        <script src="http://threejs.org/examples/js/loaders/STLLoader.js"></script>

    </head>
    <header>
        <nav class="mainMenu">
            <div>
                <h1 class="logo"><a href="../index.html">3Dimensional</a></h1>
                <button class="btnDesplegar">
                    <span class="guion"></span>
                    <span class="guion"></span>
                    <span class="guion"></span>
                </button>
            </div>

            <div class="menuDesp">
                <ul>
                    <a href="../index.html">
                        <li type="none">Inicio</li>
                    </a>
                    <a class="subMenu">
                        <li type="none">Servicios</li>
                    </a>
                    <ul class="desplegable">
                        <a href="./shop.html">
                            <li type="none">Tienda</li>
                        </a>
                        <a href="./3dPrint.html">
                            <li type="none">Imprime tus modelos</li>
                        </a>
                    </ul>
                    <a href="./about3dPrint.html">
                        <li type="none">Conoce la impresión 3D</li>
                    </a>
                    <a href="./about.html">
                        <li type="none">Acerca de</li>
                    </a>
                </ul>
            </div>

        </nav>

    </header>

    <body>

        <div class="contenido">
            <div class="aside">
            </div>
            <div class="principal">
                <h2>Impresión 3D bajo demanda</h2>


                <section class="formulario">
                    <div>
                        <div class="controles">
                            <div>
                                <img src="../images/left-click.png" alt="">
                                <h6>Rotar</h6>
                            </div>
                            <div>
                                <img src="../images/right-click (1).png" alt="">
                                <h6>Mover</h6>
                            </div>
                            <div>
                                <img src="../images/click.png" alt="">
                                <h6>Zoom</h6>
                            </div>

                        </div>
                        <div id="Render">

                        </div>
                    </div>

                    <div>
                        <div>
                            <form enctype="multipart/form-data" action="../php/prueba.php" method="post">
                                <fieldset>
                                    <label for="archivo">Archivo a imprimir (.STL)</label>
                                    <?php
                                    echo $mensaje ;
                                    ?>
                                    <input type="file" name="archivo" id="file" accept=".stl">
                                
                                    <input type="submit" id="cargaFigura" name="cargaFigura" value="Cargar archivo .stl">
                                </fieldset>
                            </form>


                            <form action="../php/prueba.php" method="post">

                                <!--fieldset>
                                    <label for="name">Nombre</label>
                                    <input type="text" name="name" id="name">

                                    <label for="surname">Apellidos</label>
                                    <input type="text" name="surname" id="surname">

                                    <label for="email">Correo electrónico</label>
                                    <input type="email" name="email" id="email">

                                    <label for="tlfn">Número de teléfono</label>
                                    <input type="text" name="tlfn" id="tlfn" pattern="[0-9]{9}">
                                </fieldset>

                                <fieldset>
                                    <label for="direccion">Dirección</label>
                                    <input type="text" name="direccion" id="direccion">

                                    <label for="CP">Codigo postal</label>
                                    <input type="text" name="CP" id="CP" pattern="[0-9]{5}">
                                </fieldset-->

                                <fieldset>
                                    <!--label for="archivo">Archivo a imprimir (.STL)</label>
                                    <input type="file" name="archivo" id="file" accept=".stl"-->

                                    <label for="cantidad">Cantidad (1 a 10)</label>
                                    <input type="number" name="cantidad" id="cantidad" min="1" max="10">

                                    <label for="material">Material</label>
                                    <div>
                                        <input type="radio" name="material" id="PLA">PLA
                                        <input type="radio" name="material" id="ABS">ABS
                                        <input type="radio" name="material" id="PETG">PETG
                                        <input type="radio" name="material" id="TPU">TPU
                                        <input type="radio" name="material" id="Resina">Resina
                                    </div>

                                    <label for="color">Color</label>
                                    <select name="color" id="color">
                                        <option> Elige un color </option>
                                        <option value="Blanco" style="background-color: white"> Blanco</option>
                                        <option value="Negro" style="background-color: black ;"> Negro </option>
                                        <option value="Rojo" style="background-color: red ;">Rojo</option>
                                        <option value="Azul" style="background-color: blue ;">Azul</option>
                                        <option value="Verde" style="background-color: green ;">Verde</option>
                                        <option value="Amarillo" style="background-color: yellow ;">Amarillo</option>
                                        <option value="Naranja" style="background-color: orange ;">Naranja</option>
                                        <option value="Violeta" style="background-color: purple ;">Violeta</option>
                                    </select>

                                    <label for="relleno">Relleno</label>
                                    <div>
                                        <img style="width: 40px;" src="" alt=""> 20 - 30%
                                        <input type="radio" name="relleno">

                                        <input type="radio" name="relleno">50 - 60%
                                        <input type="radio" name="relleno">60 - 90%
                                    </div>

                                    <label for="detalle">Nivel de detalle</label>
                                    <div>
                                        <input type="radio" name="detalle">Prototipado
                                        <input type="radio" name="detalle">Estándar
                                        <input type="radio" name="detalle">Alto detalle
                                    </div>


                                </fieldset>

                                <fieldset>
                                    <input type="submit" name="enviar" value="Enviar">
                                    <input type="reset" value="Resetear valores">
                                </fieldset>


                            </form>
                        </div>
                    </div>
                </section>
                <section class="info">
                    <div>
                        <h2>¿Alguna duda?</h2>
                        <p> Consulta nuestra seccion de información para despejar cualquier duda</p>
                    </div>
                    <div class="botones">
                        <a href="../html/about3dPrint.html">
                            <button>
                                <strong>Información sobre impresión 3D</strong>
                            </button>
                        </a>

                        <button><strong>Información sobre materiales</strong> </button>
                    </div>

                </section>


            </div>
            <div class="aside">
            </div>
        </div>

    </body>

    <footer>
        <script src="../scripts/menuDespl.js"></script>
        <script src="../scripts/visor3D.js"></script>
        <script src="../scripts/formulario.js"></script>
        <?php
        
        echo $script;
        ?>
    </footer>


    </html>

    <?php
}

?>