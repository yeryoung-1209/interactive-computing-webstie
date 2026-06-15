function setup() {
  createCanvas(1400, 1000);
}

function draw() {
  background(10);

  // Circles
  noFill();
  stroke(255); 
  strokeWeight(3); 
  ellipse(700, 500, 80); 
  stroke(255, 100); 
  strokeWeight(1); 
  ellipse(700, 500, 95); 

  stroke(180); strokeWeight(0.5); ellipse(700, 500, 200);
  stroke(120); strokeWeight(0.2); ellipse(700, 500, 210);
  stroke(200); strokeWeight(1.5); ellipse(700, 500, 250);
  stroke(60);  strokeWeight(5);   ellipse(700, 500, 320); 

  stroke(200); strokeWeight(0.3); ellipse(700, 500, 480);
  stroke(255); strokeWeight(0.8); ellipse(700, 500, 500);
  stroke(100); strokeWeight(2.5); ellipse(700, 500, 550);
  stroke(60);  strokeWeight(10);  ellipse(700, 500, 650); 

  stroke(50);  strokeWeight(0.5); ellipse(700, 500, 850);
  stroke(30);  strokeWeight(1);   ellipse(700, 500, 950);
  stroke(255, 30); strokeWeight(0.1); ellipse(700, 500, 1150);

  // Lines
  strokeCap(SQUARE);
  stroke(255, 150); strokeWeight(0.5);
  line(700, 500, 1200, 200); 
  stroke(255, 50); strokeWeight(4); 
  line(700, 500, 300, 100); 
  stroke(200, 100); strokeWeight(0.2); 
  line(700, 500, 1300, 800); 
  line(700, 500, 100, 600);  
  line(700, 500, 700, 50);   

  // Clusters
  noStroke();
  fill(255); ellipse(900, 300, 10); 
  fill(200); ellipse(915, 310, 4);  
  fill(150); ellipse(890, 315, 2);
  fill(255, 60); ellipse(900, 300, 25); 

  fill(255); ellipse(450, 750, 12); 
  fill(180); ellipse(430, 760, 5);  
  fill(120); ellipse(465, 740, 3);
  fill(255, 40); ellipse(450, 750, 35); 

  fill(200); ellipse(1100, 800, 7); 
  fill(150); ellipse(1115, 815, 3);  
  fill(255, 30); ellipse(1100, 800, 20); 

  fill(255); ellipse(300, 200, 8); 
  fill(220); ellipse(320, 190, 4);  
  fill(255, 70); ellipse(300, 200, 15); 

  fill(255); ellipse(700, 850, 6); 
  fill(150); ellipse(720, 860, 3);  
  fill(255, 50); ellipse(700, 850, 18);

  fill(230); ellipse(1050, 500, 5); 
  fill(180); ellipse(1065, 490, 2);  
  fill(255, 40); ellipse(1050, 500, 12);

}