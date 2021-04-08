canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
nasa_mar_images_arra=["nasa11.png","nasa12.png","nasa13.png","nasa14.png"];
randomnumber=Math.floor(Math.random()*4);
console.log(randomnumber);
rover_width=100;rover_heigth=90;
bg_image=nasa_mar_images_arra[randomnumber];
console.log("backgroungimage="+bg_image);
rover_image="rover.png";
rover_x=10;
rover_y=10;

function add(){
    backgroundimagetag=new Image();
    backgroundimagetag.onload=uploadbackground;
    backgroundimagetag.src=bg_image;
    
    roverimagetag=new Image();
    roverimagetag.onload=uploadrover;
    roverimagetag.src=rover_image;

}
function uploadbackground(){
    ctx.drawImage(backgroundimagetag,0,0,canvas.width,canvas.heigth);
}

function uploadrover(){

    ctx.drawImage(roverimagetag,rover_x,rover_y,rover_width,rover_heigth);
}
window.addEventListener("keydown",mykeydown);

function mykeydown(e){

    keypress=e.keyCode;
    console.log(keypress);
    if(keypress=='38'){
        up();
        console.log("up");
    }

    if(keypress=='40'){
        down();
        console.log("down");
    }

    if(keypress=='37'){
    left();
    console.log("left");
    }

    if(keypress=='39'){
        right();
        console.log("right");
    }


}

function up(){
    
if(rover_y>=0){
    rover_y=rover_y-10;
    console.log("when up press x="+rover_x+"y="+rover_y);
    uploadbackground();
    uploadrover();
}
}


function down(){
    if(rover_y<=500){
    rover_y=rover_y+10;
    console.log("when down is press x="+rover_x+"y="+rover_y);
    uploadbackground();
    uploadrover();
    }
}

function right(){
    if(rover_x>=0){
    rover_x=rover_x-10;
    console.log("when right is press x="+rover_x+"y="+rover_y);
    uploadbackground();
    uploadrover();
    }
}

function left(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("when left is press x="+rover_x+"y="+rover_y);
        uploadbackground();
        uploadrover();
    }
}

