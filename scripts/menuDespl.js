function menuDespl(){
    desplegar = document.getElementsByClassName("desplegar");
    var clicked =false;

    for (let i = 0; i < desplegar.length; i++) {
        desplegar[i].addEventListener("click", evt =>{
            if(!clicked){
                document.getElementsByClassName("menuDesp")[i].style.display="block";
                clicked=true;
            } else{
                document.getElementsByClassName("menuDesp")[i].style.display="none";
                clicked =false;
            }
        })
        
    }
}

menuDespl();