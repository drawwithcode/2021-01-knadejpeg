function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate (30);
}

function draw() {
  background("#3c3c3b");
 
  /*all ellipses have being made in the same way*/
  /*but with different values*/

  /*1st ellipse*/
  push();
  /*centre translated in the middle of the screen*/
  translate (width/2, height/2);
  /*scaling with little rate to take it slow*/
  scale (0.5 * frameCount);
  noFill ();
  /*stroke can change depending on your position on the screen*/
  /*the difference is small and different between circles*/
  strokeWeight (0.03/500 * mouseX);
  stroke (lerpColor(color("#ffffff"), color ("#3c3c3b"),
  frameCount/240));
  ellipse (0, 0, 10, 10);
  pop();
  
  /*2nd ellipse*/
  push()
  translate (3/4*width, height/3);
  scale (0.5 * frameCount);
  noFill ();
  strokeWeight (0.01/1000 * mouseX);
  stroke (lerpColor(color("#fff422"), color ("#3c3c3b"),
  frameCount/360));
  ellipse (0, 0, 10, 10);
  pop();

  /*3rd ellipse*/
  push()
  translate (width/4, height/6);
  scale (0.1 * frameCount);
  noFill ();
  strokeWeight (0.1/500 * mouseX);
  stroke (lerpColor(color("#48ff9b"), color ("#3c3c3b"),
  frameCount/240));
  ellipse (0, 0, 150, 150);
  pop();
  
  /*4th ellipse*/
  push()
  translate (width/8, 5/6*height);
  scale (10 * frameCount);
  noFill ();
  strokeWeight (0.01/500 * mouseX);
  stroke (lerpColor(color("#a5ef3c"), color ("#3c3c3b"),
  frameCount/240));
  ellipse (0, 0, 1, 1);
  pop(); 

  /*5th ellipse*/
  push()
  translate (7/8*width, height/2);
  scale (3 * frameCount);
  noFill ();
  strokeWeight (0.1/500 * mouseX);
  stroke (lerpColor(color("#32f9f3"), color ("#3c3c3b"),
  frameCount/240));
  ellipse (0, 0, 5, 5);
  pop(); 

  /*6th ellipse*/
  push()
  translate (5/8*width, 0);
  scale (0.5 * frameCount);
  noFill ();
  strokeWeight (0.1/1000 * mouseX);
  stroke (lerpColor(color("#6a11d1"), color ("#3c3c3b"),
  frameCount/360));
  ellipse (0, 0, 10, 10);
  pop(); 
   
  /*7th ellipse*/
  push()
  translate (3/8*width, height);
  scale (1 * frameCount);
  noFill ();
  strokeWeight (0.01/1000 * mouseX);
  stroke (lerpColor(color("#ff4ddd"), color ("#3c3c3b"),
  frameCount/360));
  ellipse (0, 0, 5, 5);
  pop(); 

  /*8th ellipse*/
  push()
  translate (width/4, height/2);
  scale (0.5 * frameCount);
  noFill ();
  strokeWeight (0.01/1000 * mouseX);
  stroke (lerpColor(color("#a5ef3c"), color (255, 0, 255),
  frameCount/240));
  ellipse (0, 0, 10, 10);
  pop(); 

  /*9th ellipse*/
  push()
  translate (5/8*width, 5/6*height);
  scale (0.5 * frameCount);
  noFill ();
  strokeWeight (0.05/1000 * mouseX);
  stroke (lerpColor(color("#a5ef3c"), color (255, 0, 255),
  frameCount/240));
  ellipse (0, 0, 10, 10);
  pop(); 
 
   /*text*/
  textSize(12);
  text('move around to control', width/2, 7/8*height);
  textAlign (CENTER);
  fill("#ffffff");

}
