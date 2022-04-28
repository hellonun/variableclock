let hours, mins, secs;
let pnorcount, psinecount, psqucount, ptricount;
let norcount, sinecount, squcount, tricount;
let count;
let clocks = [norcount, sinecount, squcount, tricount];
let orders = [0, 1, 2, 3];

let playing = false;

function preload() {
  fontclock = loadFont("7segment.ttf");
  tick = loadSound("tick.wav");
}

function setup() {
  textAlign(CENTER, CENTER);
  createCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  if (playing == false) {
    playing = true;
    textFont(fontclock);
    textSize(windowHeight / 8);
  }
}

function draw() {
  if (!playing) {
    background(0);
    fill(255);
    noStroke();
    textAlign(CENTER, CENTER);
    text("Click to start", width / 2, height / 2);
  } else {
    background(0);
    fill(255);
    runClocks();
    playTicks();
    // console.log(norcount, sinecount, squcount, tricount);
    // console.log(hours, mins);

    clocks = [norcount, sinecount, squcount, tricount];

    for (i = 0; i < clocks.length; i++) {
      text(
        nf(floor(hours), 2, 0) +
          ":" +
          nf(floor(mins), 2, 0) +
          ":" +
          nf(floor(clocks[orders[i]]), 2, 0),
        width / 2,
        (height / 5) * (i + 1)
      );
    }

    // text(nf(floor(hours), 2, 0), 0, height);
  }

  function playTicks() {
    if (pnorcount < floor(norcount)) {
      tick.play();
    }
    if (psinecount < floor(sinecount)) {
      tick.play();
    }
    if (psqucount < floor(squcount)) {
      tick.play();
    }
    if (ptricount < floor(tricount)) {
      tick.play();
    }

    if (floor(norcount) == 0 && pnorcount == 59) {
      tick.play();
      shuffle(orders, true);
      // console.log(orders);
    }

    pnorcount = floor(norcount);
    psinecount = floor(sinecount);
    psqucount = floor(squcount);
    ptricount = floor(tricount);
  }
}
