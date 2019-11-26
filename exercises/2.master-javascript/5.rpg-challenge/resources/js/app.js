function Person(name, race, item) {
    this.race = race;
    this.item = item;
    this.name = name;
    this.currenthealth = 100;
    this.maxHealth = 100;
switch(race) {
        case "Humans":
            this.maxHealth = 80;
            break;
        case "Orcs":
            this.maxHealth = 140;
            break;
        case "Elves":
            this.maxHealth = 50;
            break;
        case "Vampires":
            this.maxHealth = 70;
            break;
    }

    this.min = 3;
    this.maxDamage = 20;
    this.maxHealing = 30;
    this.heal = function () {
        this.currenthealth + Math.floor(Math.random() * (this.maxHealing - this.min)) + this.min;
     };

    this.damage = function () { 
        this.currenthealth - Math.floor(Math.random() * (this.maxDamage - this.min)) + this.min;
    };

    this.totalDamage = this.damage();

    this.displayChar = function () {
        return console.log(`I am a ${this.race}, I wield a ${this.item}, my total health point are ${this.maxHealth}`);
    };
}


let Playernames = document.querySelectorAll('.Playernames');

for (let i = 0; i < Playernames.length; i++) {
    Playernames[i].addEventListener('click',ready);

}




let race = document.getElementById('race');
let race1 = document.getElementById('race1')
let items = document.getElementById('items')
let items1 = document.getElementById('items1');
let player1 = document.querySelector('.Playername');
let player2 = document.getElementById('Playername1')

let buttons = document.querySelectorAll('.btn-wrap');
buttons.style.display = "none"





function ready () {
    
    if (player1.value != "") {
        new Person(player1.value, race.value, items.value)
       
     }
    if (player2.value != "") {
        new Person(player2.value, race1.value, items1.value)
        
    }
    if ((player1.value !="") && (player2.value !="")){
        let card = document.querySelector('.card')
        let progress= document.createElement('progress')
        progress.max = 100;
        progress.value = 100;
        card.append(player1.value,race.value,items.value,progress,);


        let i;
        for (i = 0; i < 3; i++) {
            let button = document.createElement('button');
            card.append(button);

            switch (i) {
                case 0:
                    button.innerText = 'hit'
                    button.id = 'hitBtn'
                    break;
                case 1:
                    button.innerText = 'heal'
                    break;
                case 2:
                    button.innerText = 'yield'
                    break;
            }
        }

     }
     else {
         alert('fill in the field')
     }
}

