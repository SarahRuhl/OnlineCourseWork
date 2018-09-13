//This project is an assignment from Duke University's online course, Programming Foundations with JavaScript, HTML, and CSS, and uses their built in libraries
//Part I- Write a JavaScript program that modifies an image by putting three vertical stripes on it - a red stripe on the left one third, a green stripe in the middle, and a blue stripe on the right one third. 
var img1 = new SimpleImage("eastereggs.jpg");
var w = img1.getWidth();
var mark1 = w/3;
var mark2 = 2*mark1;
for(var pixel of img1.values()){
    if(pixel.getX() <mark1){
        pixel.setRed(255);
    } else if(pixel.getX()<mark2){
        pixel.setGreen(255);
    } else{
        pixel.setBlue(255);
    }
}
print(img1);
//Part II - Write a JavaScript function named swapRedGreen with one parameter pixel 
var img2 = new SimpleImage("smallhands.png");
function swapRedGreen(pixel){
    var temp = pixel.getRed();
    pixel.setRed(pixel.getGreen());
    pixel.setGreen(temp);
}
for(var pixel of img2.values()){
    swapRedGreen(pixel);
}
print(img2);
//Part 3 - Write code to change the Duke blue devil 
var img3 = new SimpleImage("duke_blue_devil.png");
for(var pixel of img3.values()){
    if(pixel.getRed()<255){
        pixel.setGreen(255);
        pixel.setBlue(0);
        pixel.setRed(255);
    }
}
print(img3);
