//background for Women EmpowerED website
var website = document.getElementsByClassName('cover')[0];
var canvas = document.getElementById('background');
var ctx = canvas.getContext('2d');
canvas.width  = window.innerWidth;
canvas.height = window.screen.height;

/*title loading animation*/
window.addEventListener('load', (event) => {
    startAnimate();
  });
  
function startAnimate(){
    window.setTimeout(function(){
        website.style.display = "block";
        website.style.transition = "opacity 0.8s";
        website.style.opacity = "1";
    },800);
}
ctx.fillStyle = 'orange';
        ctx.beginPath();
        ctx.moveTo(100, 100);
        ctx.moveTo(100, 400);
        ctx.moveTo(300, 250);
        ctx.fill();

//actual canvas funciton
var sWidth = canvas.width;
var sHeight = canvas.height;
console.log(sWidth);
for(let i = 10; i < sWidth; i = i + (sWidth/20)*1){
    for(let j = 20; j < sHeight; j = j + (sHeight/10)*1){
        console.log(j);
        ctx.fillStyle = 'rgba(255, 187, 54,0.4)';
        ctx.beginPath();
        ctx.moveTo(i, j);
        ctx.lineTo(i, j + sWidth/20);
        ctx.lineTo(i+(sHeight/10), j+ sWidth/20);
        ctx.fill();
    }
}