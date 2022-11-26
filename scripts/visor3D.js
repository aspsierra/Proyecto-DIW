// Necessary for camera/plane rotation
var degree = Math.PI / 180;

//Contenedor
/**
 * @type {HTMLDivElement}
 */
 var visor = document.getElementById("Render")
// Setup
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,visor.scrollWidth/ 500, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
const controls = new THREE.OrbitControls(camera, renderer.domElement)
controls.enableDamping = true



scene.background = new THREE.Color(0xF1EFED)
//scene.add(new THREE.AxesHelper(250))


//var width = document.getElementById("Render").style.width;
//var height = document.getElementById("Render").style.height
renderer.setSize(visor.scrollWidth, 500);

document.getElementById("Render").appendChild(renderer.domElement);

// Resize after viewport-size-change
window.addEventListener("resize", function () {
    visor.style.width=visor.scrollWidth+"px";
    renderer.setSize(visor.scrollWidth, 500);
    camera.aspect = visor.scrollWidth / 500;
    camera.updateProjectionMatrix();
});

// Adding controls
//controls = new THREE.OrbitControls(camera, renderer.domElement);
const light = new THREE.AmbientLight(0x404040); // soft white light
scene.add(light);
// Ground (comment out line: "scene.add( plane );" if Ground is not needed...)
var plane = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(250, 250),
    new THREE.MeshPhongMaterial( { color: 0x999999, specular: 0x101010 } )
);

plane.position.x = 0
plane.position.z = 0
plane.rotation.x = -90 * degree;
//plane.position.y = 0;
//scene.add( plane );
plane.receiveShadow = true;


// ASCII file - STL Import
var loader = new THREE.STLLoader();
loader.load('../media/dino.stl', function (geometry) {
    var material = new THREE.MeshNormalMaterial()
    //var material = new THREE.MeshLambertMaterial( { color: '0x049ef4', specular: 0x111111, shininess: 200 } );
    var mesh = new THREE.Mesh(geometry, material);
    //mesh.position.set( 0, 0, 0);

    scene.add(mesh);


    var middle = new THREE.Vector3();
    geometry.computeBoundingBox();
    geometry.boundingBox.getCenter(middle);

    mesh.geometry.applyMatrix4(new THREE.Matrix4().makeTranslation(
        -middle.x, -middle.y, -middle.z));

    plane.position.y = -middle.z;
    scene.add( plane );

    mesh.rotation.set(-Math.PI / 2, 0, 0)
    var largestDimension = Math.max(geometry.boundingBox.max.x,
        geometry.boundingBox.max.y,
        geometry.boundingBox.max.z)
    camera.position.z = largestDimension * 1.5;
},

    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error)

    });

// Binary files - STL Import
/*loader.load( './CalibrationCube_v2.stl', function ( geometry ) {
    //var material = new THREE.MeshLambertMaterial( { color: 0x049ef4, specular: 0x111111, shininess: 200 } );
    var mesh = new THREE.Mesh( geometry, material );
    mesh.position.set( 0, 20, 0);
    scene.add( mesh );
} );*/

// Camera positioning
camera.position.z = 200;
camera.position.y = 200;
camera.rotation.x = -90 * degree;

// Ambient light (necessary for Phong/Lambert-materials, not for Basic)
var ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

// Draw scene
var render = function () {
    renderer.render(scene, camera);
};

// Run game loop (render,repeat)
var GameLoop = function () {
    requestAnimationFrame(GameLoop);
    controls.update();
    render();
};

GameLoop();