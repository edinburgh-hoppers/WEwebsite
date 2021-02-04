//background for Women EmpowerED website
var website = document.getElementsByClassName('cover')[0];
var canvas = document.getElementById('background');
var ctx = canvas.getContext('2d');
canvas.width  = window.innerWidth;
canvas.height = window.screen.height;
let y = -200;
let flag = true;
let r = 0;
window.addEventListener('load', (event) => {
    startBackground();
  });
  
  //current issue - slight misalignment on edges don't know why????
function startBackground(){
    //circle starts in the middle and fills screen background
    let fillBgd = window.setInterval(function(){
        ctx.clearRect(0,0,canvas.width, canvas.height);
        if(r > canvas.width + 900){
            clearInterval(fillBgd);
            canvas.style.backgroundColor = "#ffd37e"
        }
        ctx.arc(canvas.width/2, canvas.height/2, r, 0, 2*Math.PI, false);
        ctx.fillStyle = "#ffd37e";
        ctx.fill();
        r = r + 10;
    },20);

    /*lines filling screen background */
    // let backgroundFill = window.setInterval(function(){
    //     if(y > canvas.height){
    //         clearInterval(backgroundFill);
    //     }
    //     if(flag){
    //         let x = 0;
    //         let dx = Math.floor(canvas.width/10);
    //         console.log(canvas.width)
    //         let oneLine = window.setInterval(function(){
    //             if(x + dx > canvas.width){
    //                 // console.log("Entered")
    //                 // console.log(x+dx)
    //                 // ctx.beginPath();
    //                 // ctx.lineWidth=200;
    //                 // ctx.strokeStyle = "rgba(255, 187, 54,0.4)";
    //                 // ctx.moveTo(x,y);
    //                 // ctx.lineTo(x+dx,y);
    //                 // ctx.stroke();
    //                 clearInterval(oneLine);
    //             }
    //             ctx.beginPath();
    //             ctx.lineWidth=200;
    //             ctx.strokeStyle = "rgba(255, 187, 54,0.4)";
    //             ctx.moveTo(x,y);
    //             console.log(x,y)
    //             ctx.lineTo(x + dx,y);
    //             ctx.stroke();
    //             x = x + dx;
    //         }, 20);
            
    //         flag = false;
    //     }  
    //     else{
    //         let x = canvas.width;
    //         let dx = Math.floor(canvas.width/10);
    //         let oneLine = window.setInterval(function(){
    //             if(x < 0){
    //                 clearInterval(oneLine);
    //             }
    //             ctx.beginPath();
    //             ctx.lineWidth=200;
    //             ctx.strokeStyle = "rgba(255, 187, 54,0.4)";
    //             ctx.moveTo(x,y);
    //             ctx.lineTo(x - dx,y);
    //             ctx.stroke();
    //             x = x - dx;
    //         }, 20);
    //         // y = y + 100
    //         flag = true;
    //     } 
    //     y = y + 200
    // }, 210); // had to extra 10 ms here to prevent y from incrementing before interval ended.
//end of lines filing screen background 


    window.setTimeout(function(){
        website.style.display = "block";
        website.style.transition = "opacity 0.8s";
        website.style.opacity = "1";
        
    },1500);
   
}




