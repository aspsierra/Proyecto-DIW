async function load(nombreJson) {
    const DATA = await fetch("../json/" + nombreJson + ".json").then(response => response.json());
    console.log(DATA);
    return DATA;
};

function crearItem(item) {
    var div = document.createElement("div");
    div.className = "item";
    div.innerHTML =
        "<h3>" + item.nombre + "</h3>" +
        "<h4>" + item.tipo + "</h4>" +
        "<img src = " + item.img + " alt = " + item.nombre + ">" +
        "<p>" + item.descr + "</p>";
    document.getElementsByClassName("tablaMaterial")[0].appendChild(div);
}

function crearItemTienda(item) {
    var div = document.createElement("div");
    div.className = "item";
    div.innerHTML =

        "<img src = " + item.img + " alt = " + item.nombre + ">" + "<p>" + item.nombre + "</p>" +
        "<p>" + item.precio + "</p>";
    document.getElementsByClassName("tablaTienda")[0].appendChild(div);
}

async function generar() {
    var cargaJson;
    var data;
    var path = location.pathname.split("/")
    switch (path[path.length - 1]) {
        case "aboutMaterials.html":
            cargaJson = await load("materials");
            data = cargaJson.materiales;
            for (let i = 0; i < data.length; i++) {
                crearItem(data[i])
            }
            break;
        case "shop.html":
            cargaJson = await load("shop");
            data = cargaJson.tienda;
            for (let i = 0; i < data.length; i++) {
                crearItemTienda(data[i])
            }
            break;
    }
    //const DATOS = await load();
    //const MAT = DATOS.materiales;
    /*for (let i = 0; i < data.length; i++) {
        crearItem(data[i])
    }*/
}

generar();