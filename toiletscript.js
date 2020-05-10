"use strict";
function dragNdrop(event) {
    var fileName = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("preview");
    // var imgdiv = document.createElement("div");
    var previewImg = document.createElement("img");
    previewImg.setAttribute("src", fileName);
    // preview.innerHTML = "";
    // preview.appendChild(previewImg);
    // preview.appendChild(previewImg);
    // preview.appendChild(previewImg);

    for(var i=0; i < 7; i++){
      var imgdiv = document.createElement("div");
        preview.appendChild(imgdiv);
        imgdiv.appendChild(previewImg.cloneNode());
       
      }


    // render3DSpace(fileName);

    document.querySelector(".dragBox").style.display = "none";
}


function drag() {
    document.getElementById('uploadFile').parentNode.className = 'draging dragBox';
}
function drop() {
    document.getElementById('uploadFile').parentNode.className = 'dragBox';
}



// $( function() {
//   $( "#preview" ).draggable();
// } );

var target = $("#preview"),
    proxy = $("#proxy"),
    proxytrigger = $("#proxytrigger");

function update(){
   //make sure the y value is always between 0 and -400
    var newY = this.y % 400;
    if(newY > 0){
      newY = newY -400
    }
    if (newY !== this.y) {
      TweenLite.set(target, {y:newY, overwrite:false});
      this.y = newY;
    }
  }

Draggable.create(proxy,
{
  type:'y',
  trigger: proxytrigger,
  onDrag: update,
  onThrowUpdate: update,
  throwProps: true
});

// $("#overflow").click(function(){
//   TweenLite.set("#proxytrigger", {overflow:"visible"})
//   TweenLite.set(this, {visibility:"hidden"})
// })




// function render3DSpace(textureFile){

// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// var renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// renderer.outputEncoding = THREE.sRGBEncoding;
// document.body.appendChild( renderer.domElement );






// // setup user texture
// var texture = new THREE.TextureLoader().load(textureFile);
// // If texture is used for color information, set colorspace.
// texture.encoding = THREE.sRGBEncoding;

// // UVs use the convention that (0, 0) corresponds to the upper left corner of a texture.
// texture.flipY = false;

// var material = new THREE.MeshBasicMaterial({map:texture});


// // //3d model loader

// var loader = new THREE.GLTFLoader();
// loader.load( 'toiletpapermodel.glb', function ( gltf ) {
//     console.log(gltf);
//     scene.add( gltf.scene );
//     var mesh = gltf.scene.children[0];
//     mesh.material = material;

// }, undefined, function ( error ) {

// 	console.error( error );

// } );



// // using render

// function animate() {
// 	requestAnimationFrame( animate );
// 	renderer.render( scene, camera );
// }
// animate();

// }