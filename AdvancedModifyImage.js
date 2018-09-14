//This project is an assignment from Duke University's online course, Programming Foundations with JavaScript, HTML, and CSS, and uses their built in libraries
//Part I - Write a green screen algorithm
var img1 = new SimpleImage("drewRobert.png");
var img2 = new SimpleImage("dinos.png");
var output = new SimpleImage(img1.getWidth(),img1.getHeight());
for(var pixel of img1.values()){
    var x = pixel.getX();
    var y = pixel.getY();
    if(pixel.getGreen()>=pixel.getRed()+pixel.getBlue()){
        output.setPixel(x,y,img2.getPixel(x,y));
    } else {
        output.setPixel(x,y,img1.getPixel(x,y));
    }
}
print(output);

// Part III - Write a function that turns a pixel to black and write function that takes a width and an image and adds a border to the image.
function setBlack(pixel) {
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(0);
    return pixel;
}

function addBorder(img,w){
    for(pixel of img.values()){
        if(pixel.getX()<w||pixel.getY()<w||pixel.getX()>img.getWidth()-w||pixel.getY()>img.getHeight()-w){
            img.setPixel(pixel.getX(),pixel.getY(),setBlack(pixel));
        }
    }
}
