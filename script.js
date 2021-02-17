let doorImage_1 = document.getElementById('door1');
let doorImage_2 = document.getElementById('door2');
let doorImage_3 = document.getElementById('door3');
let startButton = document.getElementById('start');

let botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';

let beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';

let spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';

let closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';

let numClosedDoors = 3;

let currentlyPlaying = true;

let openDoor1;
let openDoor2;
let openDoor3;

const isBot = (door) => {
  if (door.src === botDoorPath){
    return true;
  } else {
    return false;
  }
}

const isClicked = (door) => {
  if (door.src === closedDoorPath){
    return false;
  } else {
    return true;
  }
}

const playDoor = (door) => {
  numClosedDoors -= 1;
  if (numClosedDoors == 0){
    gameOver('win');
  } else if (isBot(door)) {
    gameOver();
  }
}

const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;    
  } else if (choreDoor === 1){
    openDoor1 = beachDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = spaceDoorPath; 
  } else {
    openDoor1 = spaceDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = botDoorPath; 
  }
};

doorImage_1.onclick =  () => {
  if (currentlyPlaying && !isClicked(doorImage_1)){
  doorImage_1.src = openDoor1;
  playDoor(doorImage_1);
  }
};

doorImage_2.onclick =  () => {
  if (currentlyPlaying && !isClicked(doorImage_2)){
  doorImage_2.src = openDoor2;
  playDoor(doorImage_2);
  }
};

doorImage_3.onclick =  () => {  
  if (currentlyPlaying && !isClicked(doorImage_3)){
  doorImage_3.src = openDoor3;
  playDoor(doorImage_3);
  }
};

startButton.onclick = () => {
  if (currentlyPlaying == false){
    startRound();
  }
}

const startRound = () => {
  doorImage_1.src = closedDoorPath;
  doorImage_2.src = closedDoorPath;
  doorImage_3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML= 'Good luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

const gameOver = (status) => {
  if (status == 'win'){
    startButton.innerHTML= 'You won! Play again?';
  } else  {
    startButton.innerHTML= 'Gotcha! You lost! Play?';
  }
  currentlyPlaying = false;
}

startRound();