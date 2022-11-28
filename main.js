Nx = 0 ;
Ny = 0 ;

function preload() 
{
 img = loadImage("https://i.postimg.cc/Bnn2rhLr/x.jpg") ;
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
        Nx = results[0].pose.nose.x - 15;
        Ny = results[0].pose.nose.y + 5;
        console.log(Nx+","+Ny);
    }
}

function draw() 
{
    image(video,0,0,300,300) ;
    image(img,Nx,Ny,60,40) ;
}

function tsk() 
{
    save('mfi.png') ;
}