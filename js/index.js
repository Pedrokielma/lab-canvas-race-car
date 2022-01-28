const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const cWidth = canvas.width;
const cHeight = canvas.height;

const imgRoad = new Image();

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
};


function startGame(){
 
  imgRoad.addEventListener('load', () => {
    draw(imgRoad, 0, 0, 500, 700);
    car.callPlayer()
  });

   
  imgRoad.src = '/images/road.png';
}

function draw(img, stp1, stp2, width, height) {
    ctx.drawImage(img, stp1, stp2, width, height);
  }

  class Player {
    constructor(){
      this.x = 220;
      this.y = 520;
      const imgCar = new Image()
      this.img = imgCar
      imgCar.addEventListener('load', () => {
        callPlayer()
      });
      imgCar.src = '/images/car.png';
    }  
    
  callPlayer(){
    ctx.drawImage(this.img, this.x, this.y, 60, 90)
  }
  moveRight() {
    this.x += 10;
  }
  moveLeft() {
    this.x -= 10;
  }
  }
  const car = new Player();

  document.addEventListener('keydown', (e) => {
    switch (e.key){
      case 'ArrowRight':
      car.moveRight();
      break;
      case 'ArrowLeft':
      car.moveLeft();
      break;
    }
    updateCanvas();
  })

  function updateCanvas() {
    car.clearRect(car.x, car.y, 60, 90);
    
    car.callPlayer();

  }
/*
document.addEventListener('keydown', (e) => {
  switch (e.code) {
    case 'ArrowUp':
      caterpie.moveUp();
      break;
    case 'ArrowDown':
      caterpie.moveDown();
      break;
    case 'ArrowRight':
      caterpie.moveRight();
      break;
    case 'ArrowLeft':
      caterpie.moveLeft();
      break;
  }
  updateCanvas();
});
function updateCanvas() {
  ctx.clearRect(0, 0, cWidth, cHeight);
  ctx.fillText('Caterpie x: ' + caterpie.x, 600, 100);
  ctx.fillText('Caterpie y: ' + caterpie.y, 600, 150);
  caterpie.draw();
}
 */

