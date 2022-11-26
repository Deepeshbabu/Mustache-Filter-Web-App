function preload() 
{

}

function setup() 
{
    can = createCanvas(300,300) ;
    can.center() ;
    video = createCapture(VIDEO);
    video.size(300,300) ;
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses) ;
}

function modelLoaded() 
{
    console.log("working");
}

function gotPoses(results) 
{
    if(results.length > 0) 
    {
        console.log(results);
        console.log("x = " + results[0].pose.nose.x);
        console.log("y = " + results[0].pose.nose.y);
    }
}

function draw() 
{
    image(video,0,0,300,300) ;
}

function tsk() 
{
    save('mfi.png') ;
}