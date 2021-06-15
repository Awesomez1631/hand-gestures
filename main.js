function preload(){

}
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,500);
    canvas.position(560,150);
    posenet = ml5.poseNet(video,modelloaded);
    posenet.on('pose', gotPoses);
}
function draw(){
    background('#add8e6');
}
function modelloaded(){
    console.log("POSENET has been initialized");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}