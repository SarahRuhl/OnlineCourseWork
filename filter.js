var original=null;
var working=null;

//Filters
function goStar(){
  if(working==null){
    alert("No Image has been uploaded");
  } else {
    for(var px of working.values()){
      var ave = (px.getRed()+px.getBlue()+px.getGreen())/3; 
      px=pixelToBlue(px,ave);
      if(Math.random()> .95){   
        if(Math.random()<.25){
          px=pixelToRed(px);
        } else if(Math.random()<.25){
          px=pixelToYellow(px);
        }else{
          px=pixelToWhite(px);
        }
      }
    }
  }
  drawToCanvas();
}

function goBlur(){
  if(working==null){
    alert("No Image has been uploaded");
  } else {
    for(var px of working.values()){
      if(Math.random()>.5){
        var pixel = blur(px);
        working.setPixel(px.getX(),px.getY(),pixel);
      }
    }
  }
  drawToCanvas();
}

function goGrey(){
  if(working==null){
    alert("No Image has been uploaded");
  } else {
    for (var pixel of working.values()){
        var ave = (pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
        pixel.setRed(ave);
        pixel.setBlue(ave);
        pixel.setGreen(ave);
    }
    drawToCanvas();  
  }
}

function goRain(){
  if(working==null){
    alert("No Image has been uploaded");
  } else {
    var stripHeight = working.getHeight()/7;
    for(var px of working.values()){
      var ave = (px.getRed()+px.getBlue()+px.getGreen())/3;
      if(px.getY()<stripHeight){
        px=pixelToRed(px,ave);
      } else if (px.getY()<stripHeight*2){
        px=pixelToOrange(px,ave);
      } else if (px.getY()<stripHeight*3){
        px=pixelToYellow(px,ave);
      } else if (px.getY()<stripHeight*4){
        px=pixelToGreen(px,ave);
      }
      else if (px.getY()<stripHeight*5){
        px=pixelToBlue(px,ave);  
      }else if (px.getY()<stripHeight*6){
        px=pixelToIndigo(px,ave);
      } else{
        px=pixelToViolet(px,ave);
      }
    }
    drawToCanvas();
  }
}



function goRed(){ 
  if(working==null){
    alert("No Image has been uploaded");
  } else {
    for(var px of working.values()){
      var ave = (px.getRed()+px.getBlue()+px.getGreen())/3;
      px = pixelToRed(px,ave);
    }
  }
  drawToCanvas();
}

//Filter Utilities
function blur(px){
  var randomX =(Math.random()*10-5)+px.getX();
  var randomY =(Math.random()*10-5)+px.getY();
  if(randomX<0){
    randomX=0;
  }else if(randomX>working.getWidth()-1){
    randomX=working.getWidth()-1;
  }
  if(randomY<0){
    randomY=0;
  }else if(randomY>working.getHeight()-1){
    randomY=working.getHeight()-1;
  }
  var pixel=working.getPixel(randomX,randomY);
  return pixel;
}

function pixelToRed(px,ave){
    if(ave < 128){
      px.setRed(2*ave);
      px.setGreen(0);
      px.setBlue(0);
    }else{
      px.setRed(255);
      px.setGreen(2*ave - 255);
      px.setBlue(2*ave - 255);
    }
  return px;
}

function pixelToOrange(px,ave){
  if(ave < 128){
    px.setGreen((127/255)*2*ave)
    px.setRed(2*ave); 
    px.setBlue(0);
  }else{
    px.setGreen(130);
    px.setRed(255);
    px.setBlue(2*ave - 255);
  }
  return px;
}

function pixelToYellow(px,ave){
  if(ave < 128){
    px.setGreen(2*ave);
    px.setRed(2*ave);
    px.setBlue(0);
  }else{
    px.setGreen(255);
    px.setRed(255);
    px.setBlue(2*ave - 255);
  }
  return px;
}

function pixelToGreen(px,ave){
  if(ave < 128){
    px.setGreen(2*ave);
    px.setRed(0);
    px.setBlue(0);
  }else{
    px.setGreen(255);
    px.setRed(2*ave - 255);
    px.setBlue(2*ave - 255);
  }
  return px;
}

function pixelToBlue(px,ave){
  if(ave < 128){
    px.setBlue(2*ave);
    px.setGreen(0);
    px.setRed(0);
  }else{
    px.setBlue(255);
    px.setGreen(2*ave - 255);
    px.setRed(2*ave - 255);
  }
  return px
}

function pixelToIndigo(px,ave){
  if(ave < 128){
    px.setGreen(0);
    px.setRed(0.8*ave);
    px.setBlue(2*ave);
  }else{
    px.setGreen(2*ave - 255);
    px.setRed(1.2*ave-51);
    px.setBlue(255);
  }
  return px;
}

function pixelToViolet(px,ave){
  if(ave < 128){
            px.setGreen(0);
            px.setRed((148/210)*2*ave);
            px.setBlue(2*ave);
          }else{
            px.setGreen(2*ave - 255);
            px.setRed(148);
            px.setBlue(210);
          }
  return px;
}

function pixelToWhite(px){
  px.setRed(255);
  px.setGreen(255);
  px.setBlue(255);
  return px;
}

//Utilities
function reset(){
  if(original!=null){    
    copyOriginal();
    drawToCanvas();
  }
}

function copyOriginal(){  
  for(var px of working.values()){  
    var x = px.getX();
    var y = px.getY();
    var pr=original.getPixel(x,y);
    working.setPixel(x,y,pr);
  }
}

function drawToCanvas(){
  var canvas = document.getElementById("can");
  working.drawTo(canvas);
}

function load(){
  
 var filename = document.getElementById("fload");
  original = new SimpleImage(filename);
  working = new SimpleImage(filename);
  reset();
}
