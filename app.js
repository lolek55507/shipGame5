import { Bullet } from './bullets.js';


window.addEventListener('DOMContentLoaded', () => {
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
let canvasWidth = 1000;
let canvasHeight = 600;
let playerHeight = 600;
let playerWidth = 600;
const backLayer0 = document.getElementById('layer0');
const backLayer1 = document.getElementById('layer1');
const backLayer2 = document.getElementById('layer2');
const backLayer3 = document.getElementById('layer3');
const backLayer4 = document.getElementById('layer4');
const backLayer5 = document.getElementById('layer5');
const backLayer6 = document.getElementById('layer6');
const playerImage = document.getElementById('playerImage');
let backgroundPosX = 0;
let backgroundPosY = 0;
let playerPositionX = 10;
let playerPositionY = 10;
let bullets = [];
let characterBulletSpeed = 2;
let characterBulletHeight = 10;
let characterBulletWidth = 20;
const music = document.getElementById('Music');
    music.play();
    music.volume = 0.2;



  

    document.addEventListener('keydown', (e) => {
      
       if(e.key === 's' || e.key === 'ArrowDown') {
        if (playerPositionY <  285) {
            playerPositionY = playerPositionY + 5;
        }
       }
       if(e.key === 'w' || e.key === 'ArrowUp') {
        if (playerPositionY > -245) {
            playerPositionY = playerPositionY - 5;
        }
        
       } 
       if(e.key === 'd' || e.key === 'ArrowRight') {
        if (playerPositionX < 620) {
            playerPositionX = playerPositionX + 5;
        }
       }
       if(e.key === 'a' || e.key === 'ArrowLeft') {
        if (playerPositionX > -220) {
            playerPositionX = playerPositionX - 5;
        }
       }
       console.log(playerPositionX, playerPositionY);
       
    });
    document.addEventListener('keyup', (e) => {
      if (e.key === ' ') {
        bullets.push(new Bullet(playerPositionX, playerPositionY, playerWidth, playerHeight, characterBulletHeight));
        console.log(bullets);
       }
    })


    function animate() {
    ctx.drawImage(backLayer5, 0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(backLayer0, 0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(backLayer1, backgroundPosX, backgroundPosY, canvasWidth, canvasHeight);
    ctx.drawImage(backLayer3, 0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(backLayer4, 0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(backLayer6, 0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(backLayer2, backgroundPosX, backgroundPosY, canvasWidth, canvasHeight);
    
    ctx.drawImage(playerImage ,playerPositionX, playerPositionY, playerWidth, playerHeight);
      // update the bullets that ve been drew
      for (let i = bullets.length - 1; i >= 0; i--) {
        bullets[i].update(characterBulletSpeed);
        bullets[i].draw('orange', characterBulletWidth, ctx, characterBulletHeight);

        // check if bullet off scree
        if (bullets[i].x > canvasWidth) {
          bullets.splice(i, 1);
        }
      }
    moveCloud();
  requestAnimationFrame(animate);
    }
  animate();

  function moveCloud() {
    if (backgroundPosX < -1320) {
    backgroundPosX = 0 + (Math.random() * 100 + canvasWidth * 0.2);
    backgroundPosY = 0;
    ctx.drawImage(backLayer1, backgroundPosX, backgroundPosY, canvasWidth / 3, canvasHeight / 3);
    ctx.drawImage(backLayer2, backgroundPosX, backgroundPosY, canvasWidth / 3, canvasHeight / 3);
    } else if (backgroundPosX > -1320) {
        backgroundPosX = backgroundPosX - Math.random() * 5;
        
    }
  }
  console.log(backgroundPosY);


  
})

  
