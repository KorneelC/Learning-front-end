let you = {
    race: "human",
    type: "awesome-being",
    move1: "heal",
    move2: "attack",
    health: 100,
    heal: function() {
       let yourhealth = this.health + Math.floor(Math.random() * (20 - 8)) + 8; 
       you.health = yourhealth;
        let punshallo = puns[Math.floor(Math.random() * puns.length)]
       return yourhealth + " " + punshallo;
       
    },
    attack: function(){
       let senshealth = sens.health - Math.floor(Math.random() * (120 - 20)) - 20;
       sens.health = senshealth;
       let punshallo = puns[Math.floor(Math.random() * puns.length)]
       return senshealth + " " + punshallo;
    }
   
}


let sens = {
    race: "monster",
    type: "skeleton",
    move1: "heal",
    move2: "attack",
    health: 1000,
    heal: function () {
        let senshealth = this.health + Math.floor(Math.random() * (80 - 40)) + 40 + ' ' + 'sans healed himself' + ' ' + puns[Math.floor(Math.random() * puns.length)];
        sens.health = senshealth
        let punshallo = puns[Math.floor(Math.random() * puns.length)];
        return senshealth + " " + punshallo;
    },
    attack: function () {
        let yourhealth = you.health - Math.floor(Math.random() * (15 - 10)) - 10;
        you.health = yourhealth
        let punshallo = puns[Math.floor(Math.random() * puns.length)];
        return yourhealth + " " + punshallo;
    }
}


if (you.health < 1 ) {
   let gameover = "Game over";
  console.log(gameover);
}
else if(sens.health < 1)  {
let gameover ="You win";
 console.log(gameover);
}












//play and pause music function

let musicBut = document.getElementById('music');
let musicOn = true;

musicBut.onclick = toggleMusic;

function toggleMusic() {
        
    if (musicOn == true) {
        musicBut.innerHTML = 'Music:on';
        musicOn = false;
        let audio = document.getElementById('themeSong');
        audio.play();
    } else {
        musicBut.innerHTML = 'Music:off';
        musicOn = true;
        let audio = document.getElementById('themeSong');
        audio.pause();
    }
}







