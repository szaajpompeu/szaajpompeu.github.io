function setup() {
  createCanvas(600, 600);// Crea un areade dibuix de 600 píxels
//  quadrats , 600 píxels d'alçada, canvas és àrea de dibuix.
   // Setup és la configuración o caracteristiques del nostre codi.
}

function draw() {// Draw significa dibuixar
//mouseX=300;mouseY=300
  background(70);// Fons de color gris, perqué hi ha un numero entre 0 i 255 i el 0 es negra i el 255 es blanc.
  print("mouseX"+mouseX);
    print("mouseX"+mouseX);
  fill(255-mouseX,mouseY,mouseX-mouseY);// fill significa omplir de color ell que hi ha a de vermellos(R:red), el segon numero és el nivell verdos(G:green) i el tercer numero és elnivell de blavos(B:blue).Podem fer 255 x 255 x 255= 16.700.000 de colors diferents.He de posar el color que vulgis als ull hi ha la cara canviat els 3 numeros, buscant a google colors RGB
  ellipse(mouseX,mouseY,mouseX-20,mouseX-20);//És la cara secera. El primer número segon número significa la posició Y (vertical) del centre de la el·lipse. El tercer número significa l'amplada de la el·lipse en pixels i el quadrat l'alçada de la el·lipse. Sempre els numeros son pixels conntants des de la cantonada  superir esquedrra, és a dir el punt 0,0 es troba diferent que a matematiques(cantonada inferior esquerra)
  fill(mouseX/20,mouseY/2,mouseX-mouseY);
  ellipse(mouseX-50,mouseY-28,50,40);
  ellipse(mouseX+49,mouseY-28,50+mouseX/5,40+mouseY/5);
  arc(mouseX-1,mouseY+50,115,50,0,PI);
  
   fill(0);
  ellipse(mouseX+58,mouseY-28,20,20)
   fill(255,0,0);// El color de la cara
  arc (mouseX-50,mouseY-40,60,35,)
    noFill();// no omplis de color la cella 
  arc(mouseX-50,mouseY-40,60,35,PI,0);// cella esquerra
  strokeWeight(6)
  line(mouseX+25,mouseY-55,mouseX+100,mouseY-55);//
   fill(0)
   ellipse(mouseX-50,mouseY-28,20,20);
}
