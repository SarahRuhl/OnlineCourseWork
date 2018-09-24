var fore = null;
var back = null;

function loadForeground(){
 
  var file = document.getElementById("fgload");
  fore = new SimpleImage(file);
  var canvas = document.getElementById("fg");
  fore.drawTo(canvas);
}

function loadBackground(){
  var canvas = document.getElementById("bg");
  var filename = document.getElementById("bgload");
  back = new SimpleImage(filename);
  back.drawTo(canvas);
}

function greenScreen(){
  if(fore==null){
    alert("Foreground Image not loaded");
  } else if (back==null){//This is not
    alert("Background Image not loaded");
  } else {
    clearCanvas();
    var output = new SimpleImage(back.getWidth(),back.getHeight());
    for(var pixel of fore.values()){
      var x = pixel.getX();
      var y = pixel.getY();
      if(pixel.getGreen()>=pixel.getRed()+pixel.getBlue()){
          output.setPixel(x,y,back.getPixel(x,y));
      } else {
          output.setPixel(x,y,fore.getPixel(x,y));
      }
    }
    var canvas = document.getElementById("fg");
    output.drawTo(canvas);
  }
}

function clearCanvas(){
    var canvas1 = document.getElementById("fg");
    var cxt1 = canvas1.getContext("2d");
    cxt1.clearRect(0,0,canvas1.width,canvas1.height);
    var canvas2 = document.getElementById("bg");
    var cxt2 = canvas2.getContext("2d");
    cxt2.clearRect(0,0,canvas2.width,canvas2.height);
}

function reset(){
    clearCanvas();
    fore=null;
    back=null;
}