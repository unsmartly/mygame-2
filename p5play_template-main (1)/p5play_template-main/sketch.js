
function preload() {
  bgImg = loadImage("assets/backgrounf.png");

  appleImg = loadImage("assets/player1-removebg-preview-removebg-preview.png");
  orangeImg = loadImage("assets/player2-removebg-preview.png");
  sunImg = loadImage("assets/sun-removebg-preview.png");

  bowImg = loadImage("assets/player2_weapon-removebg-preview.png");
  gunImg = loadImage("assets/player1_weapon-removebg-preview.png");
  bulletImg = loadImage("assets/bullet-removebg-preview.png");
  arrowImg = loadImage("assets/arrow-removebg-preview.png");

  orangeSheildImg = loadImage("assets/orange_shield-removebg-preview.png");
  appleSheildImg = loadImage("assets/apple_shield-removebg-preview.png");

}

function setup() {
  createCanvas(1200, 440);

  bg = createSprite(width / 2, height / 2, width, height);
  bg.addImage(bgImg);

  apple = createSprite(200, height / 2 + 60);
  apple.addImage(appleImg);
  apple.scale = 0.6

  orange = createSprite(width - 100, height / 2 + 60);
  orange.addImage(orangeImg);
  orange.scale = 0.6

  sun = createSprite(400, 100);
  sun.addImage(sunImg);

  bow = createSprite(1030, 270);
  bow.addImage(bowImg);
  bow.scale = 0.7;

  gun = createSprite(250, 250);
  gun.addImage(gunImg);
  gun.scale = 0.7;

  bulletGroup = new Group()
  arrowGroup = new Group()
  appleSheildGroup = new Group()
  orangeSheildGroup = new Group()
}

function draw() {
  background(0);

  // for the red player (the one on the left side)/gun and bullets
  if (keyIsDown(RIGHT_ARROW)) {
    bullet = createSprite(gun.x + 60, gun.y);
    bullet.addImage(bulletImg);
    bullet.velocityX = 4
    bullet.scale = 0.24;
    bulletGroup.add(bullet)
  }


  // for the blue player (the one on the right side)/bow & arrow
  if (keyIsDown(LEFT_ARROW)) {
    arrow = createSprite(bow.x - 60, bow.y);
    arrow.addImage(arrowImg);
    arrow.velocityX = -4
    arrow.scale = 0.5;
    arrowGroup.add(arrow)
  }

  if (bulletGroup.isTouching(arrowGroup)) {
    console.log("hi")
    bulletGroup.destroyEach()
    arrowGroup.destroyEach()
  }

  if (keyIsDown(UP_ARROW)) {
    setTimeout(() => {
      createSheild()
    }, 100)
  }

  if (keyIsDown(DOWN_ARROW)) {
    setTimeout(() => {
      createSheildOrange()
    }, 100)
  }
  if (appleSheildGroup.isTouching(arrowGroup)) {
    appleSheildGroup.destroyEach()
    arrowGroup.destroyEach()
  }
  if (orangeSheildGroup.isTouching(bulletGroup)) {
    orangeSheildGroup.destroyEach()
    bulletGroup.destroyEach()
  }
if(orangeSheildGroup.isTouching(arrowGroup)){
  arrowGroup.destroyEach()
}
if(appleSheildGroup.isTouching(bulletGroup)){
  bulletGroup.destroyEach()
}

if(arrowGroup.isTouching(apple)){
  arrowGroup.destroyEach()
}
if(bulletGroup.isTouching(orange)){
  bulletGroup.destroyEach()
}

//if(appleHealth=0){
//  apple.destory
//}



  drawSprites()
}

function createSheild() {
  appleSheild = createSprite(gun.x + 60, gun.y);
  appleSheild.addImage(appleSheildImg);
  appleSheildImg.scale = 0.7;
  appleSheildGroup.add(appleSheild)
}
function createSheildOrange() {
  orangeSheild = createSprite(bow.x + -60, bow.y);
  orangeSheild.addImage(orangeSheildImg);
  orangeSheildImg.scale = 0.7;
  orangeSheildGroup.add(orangeSheild)
}