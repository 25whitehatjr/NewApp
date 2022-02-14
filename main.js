noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function setup(){
    video = createCapture(VIDEO);
    video.size(600,600);
    canvas = createCanvas(500,480);
    canvas.position(700,120);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose", gotPoses);
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(rightWristX - leftWristX);

        console.log("rightWrist" + rightWristX + "leftWrist" + leftWristX + "difference" + difference);

    }
};
function modelLoaded(){
    console.log("poseNet is initialized");
}
function draw(){
    background('grey');
    document.getElementById("square_side").innerHTML = "Width and Height of a Square will be = " + difference + "px";
    fill('white');
    stroke('black');
    square(noseX, noseY, difference);
}

