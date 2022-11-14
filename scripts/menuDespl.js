function menuDespl() {
    var desplegar = document.getElementsByClassName("btnDesplegar");
    var clicked = false;

    for (let i = 0; i < desplegar.length; i++) {
        desplegar[i].addEventListener("click", evt => {
            if (!clicked) {
                document.getElementsByClassName("menuDesp")[i].style.display = "block";
                clicked = true;
            } else {
                document.getElementsByClassName("menuDesp")[i].style.display = "none";
                clicked = false;
            }
        })

    }
}

function subMenu() {
    var subMenu = document.getElementsByClassName("subMenu");
    var subMenuClicked = [];

    for (let i = 0; i < subMenu.length; i++) {
        subMenuClicked[i] = false;
        subMenu[i].addEventListener("click", evt => {
            if (!subMenuClicked[i]) {
                document.getElementsByClassName("desplegable")[i].style.display = "block";
                subMenuClicked[i] = true;
            } else {
                document.getElementsByClassName("desplegable")[i].style.display = "none";
                subMenuClicked[i] = false;
            }

        })

    }
}

menuDespl();
subMenu();