async function load(){
    const DATA = await fetch("../json/materials.json").then(response => response.json());
    console.log(DATA);
    return DATA;
};

function crearItem(item){
    var div = document.createElement("div");
    div.className = "item";
    div.innerHTML = 
        "<h3>" + item.nombre + "</h3>"+
        "<h4>" + item.tipo + "</h4>" + 
        "<img src = " + item.img + " alt = " + item.nombre + ">"+
        "<p>" + item.descr + "</p>";
    document.getElementsByClassName("tabla")[0].appendChild(div);
}

async function generar(){
    const DATOS = await load();
    const MAT = DATOS.materiales;
    for (let i = 0; i < MAT.length; i++) {
        crearItem(MAT[i])
    }
}

generar();