noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);
    canvas=createCanvas (550, 450);
    canvas.position (700, 120);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background('#969A97');
    fill('#786A57');
    stroke('#786A57');
    Hello(noseX, noseY, diffrence);
}

function modelLoaded(){
    console.log('poseNet is initialized');
}

function gotPoses(results){
if (results.length > 0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX= "+noseX+" noseY= "+noseY);
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);
    console.log("leftWristX = "+ leftWristX +" rightWristX= "+ rightWristX + "difference= "+ difference);
    document.getElementById("font_size").innerHTML="Size of the text is "+difference+"px";

}
}