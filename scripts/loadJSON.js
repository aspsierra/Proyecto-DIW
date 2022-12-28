async function load(){
    const data = await fetch("../json/prueba.json").then(response => response.json());
    console.log(data);
};

load();