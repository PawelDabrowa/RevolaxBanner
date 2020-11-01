function AnimationBottom() {

const canvas = document.getElementById('canvasBottom'),
ctxBottom = canvas.getContext('2d');
ctxBottom.fillStyle="#fff";

var barsBottom = [
    { name: 'bar1', value: 150 },

];

var delay = 0,
    speed = 10;

for(var i = 0; i < barsBottom.length; ++i){
    for(var l = 0; l < barsBottom[i].value; ++l) setTimeout(ctxBottom.fillRect.bind(ctxBottom,0,50 + 100 * i, l, 75),(i > 0 ? delay+(barsBottom[i-1].value*speed) : 0) + delay+l*speed);
}


var canvasLine=document.getElementById("canvasBottomLine");
var context=canvasLine.getContext("2d");
context.strokeStyle="white";
context.moveTo(162,0);
context.lineTo(30,120);
context.stroke();

}

AnimationBottom();