
$('section').ripples({
  resolution: 1297,
  dropRadius: 15,
  perturbance: 0.04,
});

// Automatic drops
  setTimeout(function() {
    const drop = setInterval(function() {
      var $el = $('section');
      var x = Math.random() * $el.outerWidth();
      var y = Math.random() * $el.outerHeight();
      var dropRadius = 15;
      var strength = 0.04;
      // var strength = 0.04 + Math.random() * 0.04;
      $el.ripples('drop', x, y, dropRadius, strength);
    }, 1000);
  },500)

//Function animate text
function animateTxt(className, txt, x ) {
  let indexText = 0;
  const addLetter = () => {
  className.textContent += txt[indexText];
  indexText++;
  if(indexText === txt.length) clearInterval
  (indexTyping);
  }
  const indexTyping = setInterval(addLetter, x);
}

//Function Animate Bar
function animateBar(value, canvas, x) {
  ctx = canvas.getContext('2d');
  ctx.fillStyle="#fff";

  var bars = [
      {value: value },
  ];

  var delay = 0,
      speed = 10;

  for(var i = 0; i < bars.length; ++i){
      for(var l = 0; l < bars[i].value; ++l) setTimeout(ctx.fillRect.bind(ctx,x,50 + 100 * i, l, 75),(i > 0 ? delay+(bars[i-1].value*speed) : 0) + delay+l*speed);
  }
}

//Function Canvas Line

function canvasWhiteLine(x, y, z, c, canvasLine) {
  var context=canvasLine.getContext("2d");
  context.strokeStyle="white";
  context.moveTo(x,y);
  context.lineTo(z,c);
  context.stroke();
}

const animationTop = () => {

const canvas = document.getElementById('canvas');
animateBar(180, canvas, 0);

const canvasLine=document.getElementById("canvasLine");
canvasWhiteLine(162, 0, 30, 120, canvasLine);

const spnText = document.querySelector('.animate-text-top');
const txt = 'Unique cross-linked ha technology';
animateTxt(spnText, txt, 70);
}
setTimeout( animationTop, 100);


function animationSquare() {
  (function () {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function () {
            callback(currTime + timeToCall);
        },
        timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };

    if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
        clearTimeout(id);
    };
  }());


  var canvasRectangle = document.getElementById("canvasRectangle");
  var ctxq = canvasRectangle.getContext("2d");
  var t = 1;

  var vertices = [];
  vertices.push({
    x: 0,
    y: 0
  });
  vertices.push({
    x: 50,
    y: 0
  });
  vertices.push({
    x: 50,
    y: 270
  });

  vertices.push({
    x: 0,
    y: 270
  });

  vertices.push({
    x: 0,
    y: 0
  });

  ctxq.lineWidth = 1;
  ctxq.strokeStyle = "white";

  var points = calcWaypoints(vertices);
  animate(points);

  function calcWaypoints(vertices) {
    var waypoints = [];
    for (var i = 1; i < vertices.length; i++) {
        var pt0 = vertices[i - 1];
        var pt1 = vertices[i];
        var dx = pt1.x - pt0.x;
        var dy = pt1.y - pt0.y;
        for (var j = 0; j < 100; j++) {
            var x = pt0.x + dx * j / 100;
            var y = pt0.y + dy * j / 100;
            waypoints.push({
                x: x,
                y: y
            });
        }
    }
    return (waypoints);
}

  function animate() {
    if (t < points.length - 1) {
        requestAnimationFrame(animate);
    }
    ctxq.beginPath();
    ctxq.moveTo(points[t - 1].x, points[t - 1].y);
    ctxq.lineTo(points[t].x, points[t].y);
    ctxq.stroke();
    t++;
  }
}
setTimeout( animationSquare, 3000);

function textInTheSquare() {
  const spnText = document.querySelector('.animate-text-rectangle');
  const txt = 'High Visco-elasti-city';
  animateTxt(spnText, txt, 150);
}
setTimeout( textInTheSquare, 9500);


  const animationBottom = () => {

    const canvas = document.getElementById('canvasBottom');
    animateBar(135, canvas, 15);
    
    const canvasLine=document.getElementById("canvasBottomLine");
    canvasWhiteLine(162, 0, 50, 90, canvasLine);
  
    const spnText = document.querySelector('.animate-text-bottom');
    const txt = 'High purity hyaluronic acid';
  
    animateTxt(spnText, txt, 70);
  }
  setTimeout( animationBottom, 2000);

  const coursor =  document.querySelector('.animate-coursor-rectangle');
  setTimeout(function() {
    setInterval(function() {
    coursor.classList.toggle('active');
  },400);
 },12500);




  // function animateLine() {

  //     const canvas = document.getElementById('paper');
  //     const c = canvas.getContext("2d");
  //     c.lineWidth = 0.1;
  //     const startX = 150;
  //     const startY = 0;
  //     const endX = 50;
  //     const endY = 100;
  //     let amount = 0;
  //     setInterval(function() {
  //         amount += 0.05; 
  //         c.clearRect(0, 0, canvas.width, canvas.height);
  //         c.strokeStyle = "white";
  //         c.moveTo(startX, startY);
  //         c.lineTo(startX + (endX - startX) * amount, startY + (endY - startY) * amount);
  //         c.stroke();
  //     }, 30);
  // }
// Define text style

