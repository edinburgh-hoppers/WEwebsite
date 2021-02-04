//background for Women EmpowerED website
var website = document.getElementsByClassName('cover')[0];
var canvas = document.getElementById('background');
var ctx = canvas.getContext('2d');
canvas.width  = window.innerWidth;
canvas.height = window.screen.height;
let y = 0;
let flag = true;

window.addEventListener('load', (event) => {
    startAnimate();
  });
  
function startAnimate(){
    let backgroundFill = window.setInterval(function(){
        if(y > canvas.height){
            clearInterval(backgroundFill);
        }
        if(flag){
            let x = 0;
            let dx = Math.floor(canvas.width/10);
            console.log(canvas.width)
            let oneLine = window.setInterval(function(){
                if(x + dx > canvas.width){
                    console.log("Entered")
                    console.log(x+dx)
                    ctx.beginPath();
                    ctx.lineWidth=100;
                    ctx.strokeStyle = "rgba(255, 187, 54,0.4)";
                    ctx.moveTo(x,y);
                    ctx.lineTo(x+dx,y);
                    ctx.stroke();
                    clearInterval(oneLine);
                }
                ctx.beginPath();
                ctx.lineWidth=100;
                ctx.strokeStyle = "rgba(255, 187, 54,0.4)";
                ctx.moveTo(x,y);
                ctx.lineTo(x + dx,y);
                ctx.stroke();
                x = x + dx;
            }, 30);
            
            flag = false;
        }  
        else{
            let x = canvas.width;
            let dx = Math.floor(canvas.width/10);
            let oneLine = window.setInterval(function(){
                if(x < 0){
                    clearInterval(oneLine);
                }
                ctx.beginPath();
                ctx.lineWidth=100;
                ctx.strokeStyle = "rgba(255, 187, 54,0.4)";
                ctx.moveTo(x,y);
                ctx.lineTo(x - dx,y);
                ctx.stroke();
                x = x - dx;
            }, 30);
            // y = y + 100
            flag = true;
        } 
        y = y + 100
    }, 315); // had to extra 10 ms here to prevent y from incrementing before interval ended.

    window.setTimeout(function(){
        website.style.display = "block";
        website.style.transition = "opacity 0.8s";
        website.style.opacity = "1";
    },1500);
}