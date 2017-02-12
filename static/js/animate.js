// requestAnimationFrame Shim
(function() {
  var requestAnimationFrame = window.requestAnimationFrame || 
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || 
    window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

  var hourCanvas = document.getElementById('hourCanvas');
  var hourContext = hourCanvas.getContext('2d');
  var minuteCanvas = document.getElementById('minuteCanvas');
  var minuteContext = minuteCanvas.getContext('2d');
  var secondCanvas = document.getElementById('secondCanvas');
  var secondContext = secondCanvas.getContext('2d');

  var curTime = new Date();
  var curMin = curTime.getMinutes();
  var curHour = curTime.getHours() % 12;
  var curSec = curTime.getSeconds();
 
  // Shouldn't re-declare these each time in animation loop
  var x = hourCanvas.width / 2;
  var y = hourCanvas.height / 2;

  // CODE FOR HOUR DISPLAY
  hourContext.font = "100px Arial";
  hourContext.textAlign = "center";
  hourContext.textBaseline = "middle"
  hourContext.fillText(curHour,x,125);

  // CODE FOR MINUTE DISPLAY
  var minuteRadius;
  var minuteWidth;
  var radius = 100;
  var endPercent = curMin / 60 * 100;
  var curPerc = 0;
  var counterClockwise = false;
  var circ = Math.PI * 2;
  var quart = Math.PI / 2;

  minuteContext.lineWidth = 8;
  minuteContext.strokeStyle = '#ad2323';

  function animate(current) {
    minuteContext.clearRect(0, 0, minuteCanvas.width, minuteCanvas.height);
    minuteContext.beginPath();
    // context.arc(center x, center y, radius, startAngle, endAngle, counterclockwise);
    minuteContext.arc(x, y, radius, -(quart), ((circ) * current) - quart, false);
    minuteContext.stroke();
    curPerc++;
    if (curPerc < endPercent) {
      requestAnimationFrame(function () {
        animate(curPerc / 100)
      });
    }
  }

 animate();

  // CODE FOR SECOND DISPLAY
  var secondRadius;
  var secondWidth;

var startAngle;
var endAngle;
var originalComposite = context.globalCompositeOperation;

var currentEndAngle = 0
var currentStartAngle = 0;
var color = 'black'; // color can stay black when we erase
var lineRadius = 75;
var lineWidth = 15;

setInterval(draw, 50);


function draw() { /***************/

    startAngle = currentStartAngle * Math.PI;
    endAngle = (currentEndAngle) * Math.PI;
    
    currentStartAngle = currentEndAngle - 0.01;
    currentEndAngle = currentEndAngle + 0.01;
    
    if (Math.floor(currentStartAngle / 2) % 2) {
      radius = lineRadius - 1;
      width = lineWidth + 3;
      context.globalCompositeOperation = 'destination-out';
    } else {
      radius = lineRadius;
      width = lineWidth;
      context.globalCompositeOperation = originalComposite;
    }
            
    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle, false);
    context.lineWidth = width;
    // line color
    context.strokeStyle = color;
    context.stroke();

    /************************************************/
}
