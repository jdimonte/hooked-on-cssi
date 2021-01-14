/* global createCanvas background noStroke fill mouseX mouseY line width height circle io translate, rotate, background, angleMode, fill, DEGREES, scale, ellipse,
loadImage, image, width, height, random, keyPressed, keyIsDown, key, RIGHT_ARROW, LEFT_ARROW, 
collideRectCircle, text, rect, line, round, abs, noFill, collideRectPoly, stroke, strokeWeight, createVector */

let socket, hook, hook1X, hook2X, goldfish, guppy, bass, siamese, northernPike, mahiMahi, mandarinfish, nileTilapia, salmon, angelfish, bluegill,
  cod, koi, rainbowTrout, tuna, caughtGoldfish, caughtGuppy, caughtBass, caughtSiamese, caughtNorthernPike, caughtMahiMahi, caughtMandarinfish,
  caughtNileTilapia, caughtSalmon, caughtAngelfish, caughtBluegill, caughtCod, caughtKoi, caughtRainbowTrout, caughtTuna, depth, score, fishArr,
  f1, f,fishArray, gameOver, plasticBag, straw, bottle, jug, trashArray, t, darkness, bubble, bubbles, b, poly, friendArray;

function preload() {
  hook = loadImage(
    "https://cdn.glitch.com/960b058d-d707-4b53-a86b-610c8ebad83a%2Ffishing_hook.png?v=1595814406623"
  );
  goldfish = loadImage(
    "https://cdn.glitch.com/960b058d-d707-4b53-a86b-610c8ebad83a%2Fgoldfish.png?v=1595814423573"
  );
  guppy = loadImage(
    "https://cdn.glitch.com/960b058d-d707-4b53-a86b-610c8ebad83a%2Fguppy.png?v=1595814613207"
  );
  bass = loadImage(
    "https://cdn.glitch.com/960b058d-d707-4b53-a86b-610c8ebad83a%2Flargemouth%20bass.png?v=1595814632928"
  );
  siamese = loadImage(
    "https://cdn.glitch.com/960b058d-d707-4b53-a86b-610c8ebad83a%2Fsiamese_fighting_fish.png?v=1595814677667"
  );
  northernPike = loadImage(
    "https://cdn.glitch.com/960b058d-d707-4b53-a86b-610c8ebad83a%2Fnorthern_pike.png?v=1595814662338"
  );
  mahiMahi = loadImage(
    "https://cdn.glitch.com/960b058d-d707-4b53-a86b-610c8ebad83a%2Fmahi_mahi.png?v=1595814640926"
  );
  mandarinfish = loadImage(
    "https://cdn.glitch.com/960b058d-d707-4b53-a86b-610c8ebad83a%2Fmandarinfish.png?v=1595814648283"
  );
  nileTilapia = loadImage(
    "https://cdn.glitch.com/960b058d-d707-4b53-a86b-610c8ebad83a%2Fnile_tilapia.png?v=1595814659160"
  );
  salmon = loadImage(
    "https://cdn.glitch.com/960b058d-d707-4b53-a86b-610c8ebad83a%2Fsalmon.png?v=1595814673656"
  );
  angelfish = loadImage(
    "https://cdn.glitch.com/960b058d-d707-4b53-a86b-610c8ebad83a%2FANGELFISH.png?v=1596062608411"
  );
  bluegill = loadImage(
    "https://cdn.glitch.com/960b058d-d707-4b53-a86b-610c8ebad83a%2FBLUEGILL.png?v=1596062611387"
  );
  cod = loadImage(
    "https://cdn.glitch.com/960b058d-d707-4b53-a86b-610c8ebad83a%2FCOD.png?v=1596062618406"
  );
  koi = loadImage(
    "https://cdn.glitch.com/960b058d-d707-4b53-a86b-610c8ebad83a%2FKOI.png?v=1596062620272"
  );
  rainbowTrout = loadImage(
    "https://cdn.glitch.com/960b058d-d707-4b53-a86b-610c8ebad83a%2FRAINBOWTROUT.png?v=1596062622305"
  );
  tuna = loadImage(
    "https://cdn.glitch.com/960b058d-d707-4b53-a86b-610c8ebad83a%2FTUNA.png?v=1596062634561"
  );
  bottle = loadImage(
    "https://cdn.glitch.com/960b058d-d707-4b53-a86b-610c8ebad83a%2Fthumbnails%2Fbroken_bottle.png?1595943975299"
  );
  straw = loadImage(
    "https://cdn.glitch.com/960b058d-d707-4b53-a86b-610c8ebad83a%2Fthumbnails%2Fstraw.png?1595943989255"
  );
  jug = loadImage(
    "https://cdn.glitch.com/960b058d-d707-4b53-a86b-610c8ebad83a%2Fthumbnails%2Fink_plastic_bottle.png?1595943979927"
  );
  plasticBag = loadImage(
    "https://cdn.glitch.com/960b058d-d707-4b53-a86b-610c8ebad83a%2Fthumbnails%2Fink_plastic_bottle.png?1595943979927"
  );
  bubble = loadImage(
    "https://cdn.glitch.com/960b058d-d707-4b53-a86b-610c8ebad83a%2Fbubble.png?v=1595967799613"
  );
  caughtGoldfish = loadImage(
    "https://cdn.glitch.com/960b058d-d707-4b53-a86b-610c8ebad83a%2Fcaught_goldfish.png?v=1595990887356"
  );
  caughtGuppy = loadImage(
    "https://cdn.glitch.com/960b058d-d707-4b53-a86b-610c8ebad83a%2Fcaught_guppy.png?v=1595990896689"
  );
  caughtBass = loadImage(
    "https://cdn.glitch.com/960b058d-d707-4b53-a86b-610c8ebad83a%2Fcaught_largemouth%20bass.png?v=1595990872440"
  );
  caughtSiamese = loadImage(
    "https://cdn.glitch.com/960b058d-d707-4b53-a86b-610c8ebad83a%2FcaughtSiamese.png?v=1596060081138"
  );
  caughtNorthernPike = loadImage(
    "https://cdn.glitch.com/960b058d-d707-4b53-a86b-610c8ebad83a%2Fcaught_northern_pike.png?v=1596061083985"
  );
  caughtMahiMahi = loadImage(
    "https://cdn.glitch.com/960b058d-d707-4b53-a86b-610c8ebad83a%2Fcaught_mahi_mahi.png?v=1596061077649"
  );
  caughtMandarinfish = loadImage(
    "https://cdn.glitch.com/960b058d-d707-4b53-a86b-610c8ebad83a%2Fcaught_mandarinfish.png?v=1596061078700"
  );
  caughtNileTilapia = loadImage(
    "https://cdn.glitch.com/960b058d-d707-4b53-a86b-610c8ebad83a%2Fcaught_nile_tilapia.png?v=1596061081892"
  );
  caughtSalmon = loadImage(
    "https://cdn.glitch.com/960b058d-d707-4b53-a86b-610c8ebad83a%2FcaughtSalmon.png?v=1596062198355"
  );
  caughtAngelfish = loadImage(
    "https://cdn.glitch.com/960b058d-d707-4b53-a86b-610c8ebad83a%2Fcaught_angelfish.png?v=1596063300304"
  );
  caughtBluegill = loadImage(
    "https://cdn.glitch.com/960b058d-d707-4b53-a86b-610c8ebad83a%2Fcaught_bluegill.png?v=1596063304403"
  );
  caughtCod = loadImage(
    "https://cdn.glitch.com/960b058d-d707-4b53-a86b-610c8ebad83a%2Fcaught_cod.png?v=1596063340365"
  );
  caughtKoi = loadImage(
    "https://cdn.glitch.com/960b058d-d707-4b53-a86b-610c8ebad83a%2Fcaught_koi.png?v=1596063309196"
  );
  caughtRainbowTrout = loadImage(
    "https://cdn.glitch.com/960b058d-d707-4b53-a86b-610c8ebad83a%2Fcaught_rainbow_trout.png?v=1596063312627"
  );
  caughtTuna = loadImage(
    "https://cdn.glitch.com/960b058d-d707-4b53-a86b-610c8ebad83a%2Fcaught_tuna.png?v=1596063323876"
  );
}

function setup() {
  createCanvas(600, 500);
  background(200);
  line(width / 2, 0, width / 2, height);
  noStroke();
  socket = io.connect("https://hooked-on-cssi.glitch.me/");
  socket.on("mouse", echoFishingGame);

  darkness = 0;
  background(66, 135, 200);
  angleMode(DEGREES);
  preload();
  depth = 0;
  score = 0;
  gameOver = true;
  hook1X = width / 4;
  hook2X = width / (4 / 3);

  f = new Fish("goldfish");
  fishArray = [f];

  t = new Trash(whichTrash());
  trashArray = [t];

  friendArray = [];

  bubbles = [];
  for (var i = 0; i < 20; i++) {
    b = new Bubble();
    bubbles.push(b);
  }
}

function draw() {
  background(66 - darkness, 135 - darkness, 200 - darkness);
  if (depth > 150) {
    fill("white");
    text("Click to reset!", 100, 30);
  }
  if (depth == 0) {
    fill("white");
    text("Click to start!", 100, 30);
  }

  if (keyIsDown(RIGHT_ARROW)) {
    hook1X += 2;
    if (hook1X > width / 2 - 20) {
      hook1X = width / 2 - 20;
    }
  }
  if (keyIsDown(LEFT_ARROW)) {
    hook1X -= 2;
    if (hook1X < 0) {
      hook1X = 0;
    }
  }
  if (!gameOver) {
    depth += 0.1;
    darkness += 0.1;
  }
  image(hook, hook1X, height / 4, 20, 55);
  image(hook, hook2X, height / 4, 20, 55);

  moveHook();

  stroke("black");
  strokeWeight(1);
  line(width / 4, 0, hook1X + 17.3, height / 4);
  line(width / (4 / 3), 0, hook2X + 17.3, height / 4);
  line(width / 2, 0, width / 2, height);

  text(`Score: ${score}`, 20, 30);
  text(`Depth: ${round(depth)}`, 20, 50);

  for (let i = 0; i < friendArray.length; i++) {
    if (friendArray[i] == "goldfish")
      image(caughtGoldfish, hook2X, height / 4 + 35, 25, 50);
    if (friendArray[i] == "bass")
      image(caughtBass, hook2X, height / 4 + 35, 25, 50);
    if (friendArray[i] == "guppy")
      image(caughtGuppy, hook2X, height / 4 + 35, 25, 50);
    if (friendArray[i] == "siamese")
      image(caughtSiamese, hook2X, height / 4 + 35, 25, 50);
    if (friendArray[i] == "northernPike")
      image(caughtNorthernPike, hook2X, height / 4 + 35, 25, 50);
    if (friendArray[i] == "mahiMahi")
      image(caughtMahiMahi, hook2X, height / 4 + 35, 25, 50);
    if (friendArray[i] == "mandarinfish")
      image(caughtMandarinfish, hook2X, height / 4 + 35, 25, 50);
    if (friendArray[i] == "nileTilapia")
      image(caughtNileTilapia, hook2X, height / 4 + 35, 25, 50);
    if (friendArray[i] == "angelfish")
      image(caughtAngelfish, hook2X, height / 4 + 35, 25, 50);
    if (friendArray[i] == "cod")
      image(caughtCod, hook2X, height / 4 + 35, 25, 50);
    if (friendArray[i] == "koi")
      image(caughtKoi, hook2X, height / 4 + 35, 25, 50);
    if (friendArray[i] == "rainbowTrout")
      image(caughtRainbowTrout, hook2X, height / 4 + 35, 25, 50);
    if (friendArray[i] == "bluegill")
      image(caughtBluegill, hook2X, height / 4 + 35, 25, 50);
    if (friendArray[i] == "tuna")
      image(caughtTuna, hook2X, height / 4 + 35, 25, 50);
  }

  for (let j = 0; j < trashArray.length; j++) {
    if (!gameOver) {
      trashArray[j].show();
      trashArray[j].move();
      trashArray[j].hitTrash();
    }
  }

  for (let k = 0; k < bubbles.length; k++) {
    if (!gameOver) {
      bubbles[k].show();
      bubbles[k].move();
    }
  }

  if (depth > 150) {
    gameOver = true;
  }
}

function echoFishingGame({ h, f }) {
  fill("red");
  hook2X = h + width / 2;

  for (let i = 0; i < f.length; i++) {
    if (f[i].caught) {
      friendArray.push(f[i].type);
    }
  }
}

function moveHook() {
  socket.emit("mouse", { h: hook1X, f: fishArray });
  fill("white");
  //image(hook, hook1X, height / 4, 20, 55);

  for (let i = 0; i < fishArray.length; i++) {
    if (!gameOver) {
      fishArray[i].show();
      fishArray[i].move();
      fishArray[i].flip();
      if (fishArray[i].catchFish() == true) {
        if (!fishArray[i].caught && !gameOver) {
          fishArray[i].caught = true;
          score++;
        }
      }
    }
  }
}

class Fish {
  constructor(type) {
    this.x = random(width);
    this.y = height;
    this.xVel = random(2, 5);
    this.yVel = 0.5 * this.xVel;
    this.w = 50;
    this.h = 25;
    this.type = type;
    this.passed = false;
    this.caught = false;
    this.f = true;
  }

  show() {
    if (this.caught) {
      this.x = hook1X;
      this.y = 160;
    }
    if (this.type == "bass") {
      if (this.caught) {
        image(caughtBass, this.x, this.y, this.h, this.w);
      } else {
        image(bass, this.x, this.y, this.w, this.h);
      } //60, 30
      //ellipse(this.x+30, this.y+15, this.w, this.h);
    }
    if (this.type == "goldfish") {
      if (this.caught) {
        image(caughtGoldfish, this.x, this.y, this.h, this.w);
      } else {
        image(goldfish, this.x, this.y, this.w, this.h);
      } //30, 15
      //ellipse(this.x+15, this.y+7, this.w, this.h);
    }
    if (this.type == "guppy") {
      if (this.type == "guppy") {
        if (this.caught) {
          image(caughtGuppy, this.x, this.y, this.h, this.w);
        } else {
          image(guppy, this.x, this.y, this.w, this.h);
        }
      } //35, 25
      //ellipse(this.x+17, this.y+12, this.w, this.h);
    }
    if (this.type == "siamese") {
      if (this.caught) {
        image(caughtSiamese, this.x, this.y, this.h, this.w);
      } else {
        image(siamese, this.x, this.y, this.w, this.h);
      }
    }
    if (this.type == "northernPike") {
      if (this.caught) {
        image(caughtNorthernPike, this.x, this.y, this.h, this.w);
      } else {
        image(northernPike, this.x, this.y, this.w, this.h);
      }
    }
    if (this.type == "mahiMahi") {
      if (this.caught) {
        image(caughtMahiMahi, this.x, this.y, this.h, this.w);
      } else {
        image(mahiMahi, this.x, this.y, this.w, this.h);
      }
    }
    if (this.type == "mandarinfish") {
      if (this.caught) {
        image(caughtMandarinfish, this.x, this.y, this.h, this.w);
      } else {
        image(mandarinfish, this.x, this.y, this.w, this.h);
      }
    }
    if (this.type == "nileTilapia") {
      if (this.caught) {
        image(caughtNileTilapia, this.x, this.y, this.h, this.w);
      } else {
        image(nileTilapia, this.x, this.y, this.w, this.h);
      }
    }
    if (this.type == "angelfish") {
      if (this.caught) {
        image(caughtAngelfish, this.x, this.y, this.h, this.w);
      } else {
        image(angelfish, this.x, this.y, this.w, this.h);
      }
    }
    if (this.type == "cod") {
      if (this.caught) {
        image(caughtCod, this.x, this.y, this.h, this.w);
      } else {
        image(cod, this.x, this.y, this.w, this.h);
      }
    }
    if (this.type == "koi") {
      if (this.caught) {
        image(caughtKoi, this.x, this.y, this.h, this.w);
      } else {
        image(koi, this.x, this.y, this.w, this.h);
      }
    }
    if (this.type == "rainbowTrout") {
      if (this.caught) {
        image(caughtRainbowTrout, this.x, this.y, this.h, this.w);
      } else {
        image(rainbowTrout, this.x, this.y, this.w, this.h);
      }
    }
    if (this.type == "tuna") {
      if (this.caught) {
        image(caughtTuna, this.x, this.y, this.h, this.w);
      } else {
        image(tuna, this.x, this.y, this.w, this.h);
      }
    }
    if (this.type == "bluegill") {
      if (this.caught) {
        image(caughtBluegill, this.x, this.y, this.h, this.w);
      } else {
        image(bluegill, this.x, this.y, this.w, this.h);
      }
    }
  }

  move() {
    this.x -= this.xVel;

    this.y -= this.yVel;
    if (this.y < height / (4 / 3) && !this.passed) {
      if (this.f) {
        fishArray.push(new Fish(whatType(), "1"));
        this.f = !this.f;
      } else if (!this.f) {
        fishArray.push(new Fish(whatType(), "2"));
        this.f = !this.f;
      }
      this.passed = true;
    }
  }

  flip() {
    if (this.x < 0) {
      translate(-70, 0);
      scale(-1, 1);
      this.show();
      scale(-1, 1);
      translate(70, 0);
    }

    if (this.x < -width - 120) {
      //translate(100, 0);
      this.x *= -1;
      //translate(-100, 0);
    }
  }

  catchFish() {
    {
      if (
        collideRectCircle(
          hook1X,
          height / 4 + 35,
          20,
          20,
          abs(this.x) - 100,
          abs(this.y) + 20,
          abs(this.w),
          abs(this.h)
        )
      ) {
        return true;
      } else if (
        collideRectCircle(
          hook1X,
          height / 4 + 35,
          20,
          20,
          abs(this.x) + 20,
          abs(this.y) + 10,
          abs(this.w),
          abs(this.h)
        )
      ) {
        return true;
      }

      return false;
    }
  }
}

class Trash {
  constructor(type) {
    this.x = random(width);
    this.y = height;
    this.yVel = random(2, 10);
    this.type = type;
    this.w = 40;
    this.h = 40;
    this.passed = false;
    this.hit = false;
  }

  show() {
    if (this.type == "straw") {
      image(straw, this.x, this.y, this.w, this.h); //60, 30
      //rect(this.x, this.y, this.w, this.h);
    }
    if (this.type == "jug") {
      image(jug, this.x, this.y, this.w, this.h); //30, 15
      //rect(this.x, this.y, this.w, this.h);
    }
    if (this.type == "bottle") {
      image(bottle, this.x, this.y, this.w, this.h); //35, 25
      //rect(this.x, this.y,this.w, this.h);
    }
    if (this.type == "plasticBag") {
      image(plasticBag, this.x, this.y, this.w, this.h); //35, 25
      //rect(this.x, this.y, this.w, this.h);
    }
  }

  move() {
    this.x += random(-5, 5);
    this.y -= this.yVel;
    if (this.y < height / 2 - 50 && !this.passed) {
      trashArray.push(new Trash(whichTrash()));
      this.passed = true;
    }
  }

  hitTrash() {
    if (this.type == "bottle") {
      poly = [];
      poly[0] = createVector(this.x, this.y);
      poly[1] = createVector(this.x + 20, this.y + 5);
      poly[2] = createVector(this.x + 40, this.y + 30);
      poly[3] = createVector(this.x + 30, this.y + 40);
      poly[4] = createVector(this.x + 5, this.y + 20);
    }
    if (this.type == "plasticBag") {
      poly = [];
      poly[0] = createVector(this.x, this.y);
      poly[1] = createVector(this.x, this.y + 40);
      poly[2] = createVector(this.x + 40, this.y + 40);
      poly[3] = createVector(this.x + 40, this.y);
    }
    if (this.type == "jug") {
      poly = [];
      poly[0] = createVector(this.x, this.y + 5);
      poly[1] = createVector(this.x + 5, this.y);
      poly[2] = createVector(this.x + 40, this.y + 35);
      poly[3] = createVector(this.x + 35, this.y + 40);
    }
    if (this.type == "straw") {
      poly = [];
      poly[0] = createVector(this.x + 40, this.y);
      poly[1] = createVector(this.x, this.y);
      poly[2] = createVector(this.x, this.y + 40);
      poly[3] = createVector(this.x + 5, this.y + 40);
      poly[4] = createVector(this.x + 5, this.y + 5);
      poly[5] = createVector(this.x + 40, this.y + 5);
    }
    if (collideRectPoly(hook1X, height / 4, 20, 55, poly)) {
      if (!this.hit && !gameOver) {
        score -= 2;
        this.hit = true;
      }
    }
  }
}

class Bubble {
  constructor() {
    this.x = random(width);
    this.y = height + random(height);
    this.size = random(10, 20);
  }

  show() {
    image(bubble, this.x, this.y, this.size, this.size);
  }

  move() {
    this.y -= 1;
    if (this.y > height && this.y < height + 1) {
      b = new Bubble();
      bubbles.push(b);
    }
  }
}

function whatType() {
  if (depth < 30) {
    if (round(depth % 2) == 0) {
      return "goldfish";
    } else {
      return "siamese";
    }
  }
  if (depth >= 30 && depth < 75) {
    if (round(depth % 3) == 0) {
      return "guppy";
    } else if (depth % 3 == 1) {
      return "northernPike";
    } else {
      return "mahiMahi";
    }
  }
  if (depth >= 75 && depth < 120) {
    if (round(depth % 4) == 0) {
      return "bass";
    } else if (round(depth % 4) == 1) {
      return "mandarinfish";
    } else if (round(depth % 4) == 2) {
      return "nileTilapia";
    } else {
      return "koi";
    }
  }
  if (depth >= 120 && depth < 150) {
    if (round(depth % 4) == 0) {
      return "salmon";
    } else if (round(depth % 4) == 1) {
      return "angelfish";
    } else if (round(depth % 4) == 2) {
      return "rainbowTrout";
    } else {
      return "tuna";
    }
  }
}

function whichTrash() {
  if (depth < 50) {
    return "straw";
  }
  if (depth >= 50 && depth < 100) return "bottle";
  if (depth >= 100 && depth < 150) return "plasticBag";
  if (depth >= 150) return "jug";
}

function resetGame() {
  score = 0;
  depth = 0;
  darkness = 0;
  gameOver = false;

  f = new Fish("goldfish");
  fishArray = [f];

  t = new Trash(whichTrash());
  trashArray = [t];

  bubbles = [];
  for (var i = 0; i < 20; i++) {
    b = new Bubble();
    bubbles.push(b);
  }
  
  friendArray = []
}

function mousePressed() {
  gameOver = false;
  resetGame();
}
