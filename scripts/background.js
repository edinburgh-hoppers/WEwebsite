//background for Women EmpowerED website
var website = document.getElementsByClassName('cover')[0];
var canvas = document.getElementById('background');
var ctx = canvas.getContext('2d');
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;
let lwidth;
if(canvas.width > 800){
    lwidth = 40;
}
else{
    lwidth = 20;
}
let y = -200;
// let flag = true;
let r = 0;

window.addEventListener('load', (event) => {
    startBackground();
  });
  
  //current issue - slight misalignment on edges don't know why????
function startBackground(){
    //circle starts in the middle and fills screen background
    let fillBgd = window.setInterval(function(){
        // ctx.clearRect(0,0,canvas.width, canvas.height);
        if(r > canvas.width/2 + 400 ){
            clearInterval(fillBgd);
            document.getElementsByTagName('body')[0].style.backgroundColor = "#ffd37e";
            let tx = -10, ty = canvas.height/4;
            let bx = canvas.width - ty - 20, by = canvas.height + 10;
            let ribbon = window.setInterval(function(){
                if(bx > canvas.width){
                    clearInterval(ribbon);
                }
                drawLine(tx,ty,lwidth,'#832b99');
                drawLine(bx,by, lwidth, '#832b99');
                bx+=10;
                by-=10;
                tx+=10;
                ty-=10;
            },3);
        }
        ctx.arc(canvas.width/2, canvas.height/2, r, 0, 2*Math.PI, false);
        ctx.fillStyle = "#ffd37e";
        ctx.fill();
        r = r + 10;
    },20);
    window.setTimeout(function(){
        website.style.display = "block";
        website.style.transition = "opacity 0.8s";
        website.style.opacity = "1";
        
    },1500);
    
}

function drawLine(x,y,w,c){
    ctx.beginPath();
    ctx.lineCap = "round";
    ctx.lineWidth=w;
    ctx.strokeStyle = c;
    ctx.moveTo(x,y);
    ctx.lineTo(x+10,y-10);
    ctx.stroke();
}

