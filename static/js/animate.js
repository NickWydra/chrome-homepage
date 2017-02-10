// requestAnimationFrame Shim
(function() {
  var requestAnimationFrame = window.requestAnimationFrame || 
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || 
    window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

  var time = new Date();
  var minute = time.getMinutes();
  var hour = time.getHours();
 
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');
  var x = canvas.width / 2;
  var y = canvas.height / 2;
  var radius = 100;
  var endPercent = minute / 60 * 100;
  var curPerc = 0;
  var counterClockwise = false;
  var circ = Math.PI * 2;
  var quart = Math.PI / 2;

  context.lineWidth = 8;
  context.strokeStyle = '#ad2323';
  context.shadowOffsetX = 0;
  context.shadowOffsetY = 0;
  context.shadowBlur = 0;
  context.shadowColor = '#656565';

  function animate(current) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(x, y, radius, -(quart), ((circ) * current) - quart, false);
    context.stroke();
    curPerc++;
    if (curPerc < endPercent) {
      requestAnimationFrame(function () {
        animate(curPerc / 100)
      });
    }
  }

 animate();

 var canvas2 = document.getElementById('myCanvas2');
 var context2 = canvas2.getContext('2d');
 context2.font = "100px Arial";
 context2.textAlign = "center";
 context2.textBaseline = "middle"
 context2.fillText(hour,x,125);
