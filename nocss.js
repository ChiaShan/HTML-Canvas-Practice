(function () {
  var canvas = document.getElementById('canv');
  var context = canvas.getContext('2d');
  //var fillhead = context.fillStyle

  context.strokeStyle = '#000';
  context.arc(200, 100, 70, 0, 360 * (Math.PI / 180));
  context.moveTo(200, 170);
  context.lineTo(200, 300);
  context.moveTo(100, 150);
  context.lineTo(200, 200);
  context.lineTo(300, 150);
  context.moveTo(100, 350);
  context.lineTo(200, 300);
  context.lineTo(300, 350);
  context.stroke();

  var canvas2 = document.getElementById('canv2');
  var context2 = canvas2.getContext('2d');

  var x = 0;
  var y = 0;

  document.addEventListener('keydown', function(e) {
    if (e.key == 'ArrowRight') {
      x++;
    } else if(e.key =='ArrowLeft') {
      x--;
    } else if (e.key == 'ArrowUp') {
      y--;
    } else if (e.key == 'ArrowDown') {
      y++;
    }
    console.log(x, y);
    context2.clearRect(0, 0, 600, 600);
    context2.drawImage(canvas, x, y);
  });
})();
