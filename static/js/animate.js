var cvs = document.getElementById('canvas');
var ctx = cvs.getContext('2d');
ctx.lineWidth = 23;
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.font = '25px Trebuchet MS';
ctx.fillStyle = 'white';

/**
 * @closure
 */
var draw = (function () {
    var start = 1.5 * Math.PI; // Start circle from top
    var end = (2 * Math.PI) / 100; // One percent of circle

    /**
     * Draw percentage of a circle
     *
     * @param {number} r Radius
     * @param {number} p Percentage of circle
     * @param {string} c Stroke color
     * @return void
     */
    return function (r, p, c) {
        p = p || 100; // When time is '00' we show full circle
        ctx.strokeStyle = c;
        ctx.beginPath();
        ctx.arc(175, 175, r, start, p * end + start, false);
        ctx.stroke();
    };
}());

var clock = function () {
    requestAnimationFrame(clock);

    var date = new Date;
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    // Calculate percentage to be drawn
    var hp = 100 / 12 * (h % 12);
    var mp = 100 / 60 * m;
    var sp = 100 / 60 * s;
    // Ensure double digits
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    ctx.clearRect(0, 0, 350, 350);
    ctx.fillText(h + ':' + m + ':' + s, 175, 175);
    draw(75, hp, 'palevioletred');
    draw(100, mp, 'limegreen');
    draw(125, sp, 'steelblue');
};

clock()


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
  var minuteRadius = 80;
  var minEndPercent = curMin / 60 * 100;
  var minCurPerc = 0;
  var counterClockwise = false;
  var minCirc = Math.PI * 2;
  var minQuart = Math.PI / 2;

  minuteContext.lineWidth = 8;
  minuteContext.strokeStyle = '#ad2323';

  function minAnim(current) {
    minuteContext.clearRect(0, 0, minuteCanvas.width, minuteCanvas.height);
    minuteContext.beginPath();
    // context.arc(center x, center y, radius, startAngle, endAngle, counterclockwise);
    minuteContext.arc(x, y, minuteRadius, -(minQuart), ((minCirc) * current) - minQuart, false);
    minuteContext.stroke();
    minCurPerc++;
    if (minCurPerc < minEndPercent) {
      requestAnimationFrame(function () {
        minAnim(minCurPerc / 100)
      });
    }

  }

  minAnim();

  // CODE FOR SECOND DISPLAY
  var secondRadius;
  var secondWidth;
  var secondRadius = 110;
  var secEndPercent = curSec / 60 * 100;
  var secCurPerc = 0;
  var counterClockwise = false;
  var secCirc = Math.PI * 2;
  var secQuart = Math.PI / 2;

  secondContext.lineWidth = 4;
  secondContext.strokeStyle = '#228B22';

  function secAnim(current) {
    secondContext.clearRect(0, 0, secondCanvas.width, secondCanvas.height);
    secondContext.beginPath();
    // context.arc(center x, center y, radius, startAngle, endAngle, counterclockwise);
    secondContext.arc(x, y, secondRadius, -(secQuart), ((secCirc) * current) - secQuart, false);
    secondContext.stroke();
    secCurPerc++;
    if (secCurPerc < secEndPercent) {
      requestAnimationFrame(function () {
        secAnim(secCurPerc / 100)
      });
    }
    else if (secCurPerc >= secEndPercent) {
      requestAnimationFrame(function() {
        secConstant(secCurPerc)
      });
    }
  }

  secAnim();

function secConstant(secConstCurPerc) {
  secondContext
}


// var startAngle;
// var endAngle;
// var originalComposite = context.globalCompositeOperation;

// var currentEndAngle = 0
// var currentStartAngle = 0;
// var color = 'black'; // color can stay black when we erase
// var lineRadius = 75;
// var lineWidth = 15;

// setInterval(draw, 50);


// function draw() { /***************/

//     startAngle = currentStartAngle * Math.PI;
//     endAngle = (currentEndAngle) * Math.PI;
    
//     currentStartAngle = currentEndAngle - 0.01;
//     currentEndAngle = currentEndAngle + 0.01;
    
//     if (Math.floor(currentStartAngle / 2) % 2) {
//       radius = lineRadius - 1;
//       width = lineWidth + 3;
//       context.globalCompositeOperation = 'destination-out';
//     } else {
//       radius = lineRadius;
//       width = lineWidth;
//       context.globalCompositeOperation = originalComposite;
//     }
            
//     context.beginPath();
//     context.arc(x, y, radius, startAngle, endAngle, false);
//     context.lineWidth = width;
//     // line color
//     context.strokeStyle = color;
//     context.stroke();

//     /************************************************/
// }
