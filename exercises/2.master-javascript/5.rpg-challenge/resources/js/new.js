function Person(name,race, item) {
    this.name = name;
    this.race = race;
    this.item = item;
    this.currenthealth = 100;
    this.maxHealth = 100;


    this.min = 3;
    this.maxDamage = 20;
    this.maxHealing = 30;

    this.heal = function () {
       let healing = this.currenthealth + Math.floor(Math.random() * (this.maxHealing - this.min)) + this.min;
       return healing;
     };

    this.damage = function () {
        let dmg = this.currenthealth - Math.floor(Math.random() * (this.maxDamage - this.min)) + this.min;
        return dmg;
    };

    this.totalDamage = this.damage();

    this.displayChar = function () {
        return console.log(`I am a ${this.race}, I wield a ${this.item}, my total health point are ${this.maxHealth}`);
    };
    //race switch
    switch (race) {
        case "Humans":
           
            break;
        case "Orcs":
            this.maxHealth = 140;
            this.currenthealth = 140;
            break;
        case "Elves":
           
            break;
        case "Vampires":
            
            break;
    }
    switch (item) {
        case "Boots":
            
            break;
        case "Staff":
            let mulitplierStaff = this.maxHealing * 1/5
            this.maxHealing = this.maxHealing + mulitplierStaff;
            break;
        case "Sword":
            let mulitplierSword = this.maxDamage * 3/10
            this.maxDamage = this.maxDamage + mulitplierSword;
            break;
        case "Bow":
            

            break;
    }
}

let race = document.getElementById('race');
let race1 = document.getElementById('race1')
let items = document.getElementById('items')
let items1 = document.getElementById('items1');
let player1 = document.querySelector('.Playername');
let player2 = document.getElementById('Playername1')

let btns = document.querySelectorAll('.btn-wrap');
for (k = 0; k < btns.length; k++) {
    btns[k].style.display = "none";
}
let log = document.querySelector('.log > p')
console.log(log);
log.style.display = "none";
let btnwrap = document.querySelector('.card-wrap');
let Playernames = document.querySelector('#create');
Playernames.addEventListener('click', ready);


function ready() {

    Playernames.style.display= "none"
    log.style.display = "";

    if (player1.value !='' && player2.value != '') {
        let person1 = new Person(player1.value, race.value, items.value)
        let person2 = new Person(player2.value, race1.value, items1.value)
        console.log(person1,person2);
        
        //shows options elves etc.
        let playWrap = document.querySelectorAll('.player-wrap');
        
        for (t = 0; t < playWrap.length; t++) {
            playWrap[t].style.display = "none";
        }
       
        
        let card = document.querySelectorAll('.card')
        for (let i = 0; i < card.length; i++) {
            let progress = document.createElement('progress');
            

            let Healthdiv = document.createElement('div');
            Healthdiv.classList.add('hp-div');

           
            Healthdiv.innerText = progress.value + ' ' + 'current health';
            card[i].append(progress, Healthdiv);

            for (x = 0; x < 3; x++){
            let button = document.createElement('button');
            
            card[i].append(button);
                switch (x) {
                    case 0:
                        button.innerText = 'Hit'
                        break;
                    case 1:
                        button.innerText = 'Heal'
                        break;
                    case 2:
                        button.innerText = 'Yield'
                        break;
                }
            }

           
        }
        //gets all buttons
        let buttonsAHY = document.getElementsByTagName('button');
        console.log(buttonsAHY);

        //adds event to the buttons
        buttonsAHY[0].addEventListener('click', attack)
        let progressL = document.getElementsByTagName('progress');

        //assigns the values of the progressbars for player 1 and 2
        progressL[0].max = person1.maxHealth
        progressL[0].value = person1.maxHealth;
        
        progressL[1].max = person2.maxHealth
        progressL[1].value = person2.maxHealth;
        let healthL = document.getElementsByTagName('div');
      
        //attack for player 1
        function attack() {

            switch(person1.item){
                case "Bow":
                    progressL[1].value = person2.currenthealth -= Math.floor(Math.random() * (person1.maxDamage - person1.min)) + person1.min;
                    healthL[8].innerText = progressL[1].value + ' ' + 'current health';
                    let Chance = Math.random() * 100;
                    if (Chance < 70) {
                        progressL[1].value = person2.currenthealth -= Math.floor(Math.random() * (person1.maxDamage - person1.min)) + person1.min;
                        healthL[8].innerText = progressL[1].value + ' ' + 'current health';
                    }
                    break;

                default:
                    progressL[1].value = person2.currenthealth -= Math.floor(Math.random() * (person1.maxDamage - person1.min)) + person1.min;
                    healthL[8].innerText = progressL[1].value + ' ' + 'current health';
            }
            

            if (person2.currenthealth <= 0) {
                alert('player 2 loses')
                
            }

            buttonsAHY[0].removeEventListener('click', attack)
            buttonsAHY[3].addEventListener('click', attack2);
        };

        //attack for player 2
        function attack2() {

            if (person1.item == "Boots") {
               
                let DodgeChance = Math.random() * 100;
                if (DodgeChance > 70) {
                    person1.currenthealth;
                    alert('no damage taken')
                }
                else {
                    progressL[0].value = person1.currenthealth -= Math.floor(Math.random() * (person2.maxDamage - person2.min)) + person2.min;
                    healthL[6].innerText = progressL[0].value + ' ' + 'current health';
                }
            }
           if (person1.item != "Boots"){
                progressL[0].value = person1.currenthealth -= Math.floor(Math.random() * (person2.maxDamage - person2.min)) + person2.min;
                healthL[6].innerText = progressL[0].value + ' ' + 'current health';
           }

            if (person1.currenthealth <= 0) {
                alert('player 1 loses')
                
            }
            if (person2.race == "Vampires") {
                let lifesteal = Math.floor(progressL[0].value / 10);
                progressL[0].value -= lifesteal;
                progressL[1].value += lifesteal;
                healthL[6].innerText = progressL[0].value + ' ' + 'current health';
                healthL[8].innerText = progressL[1].value + ' ' + 'current health';
            }

           

            buttonsAHY[3].removeEventListener('click', attack2)
            buttonsAHY[0].addEventListener('click', attack);
        }; 

        //heal functions

        //heal for player 1
        buttonsAHY[1].addEventListener('click', heal)
       
        function heal() {
            
            progressL[0].value = person1.currenthealth += Math.floor(Math.random() * (person1.maxHealing - person1.min)) + person1.min;
            healthL[6].innerText = progressL[0].value + ' ' + 'current health'
            console.log(person1);
            if (person1.currenthealth > person1.maxHealth) {
                progressL[0].value = person1.maxHealth;
                alert('already at full health');
            }
            buttonsAHY[1].removeEventListener('click', heal)
            buttonsAHY[4].addEventListener('click', heal2);
        }

        // heal for player 2
        function heal2() {

            progressL[1].value = person2.currenthealth += Math.floor(Math.random() * (person2.maxHealing - person2.min)) + person2.min;
            console.log(person2);
            healthL[8].innerText = progressL[1].value + ' ' + 'current health'
            if (person2.currenthealth > person2.maxHealth) {
                progressL[1].value = person2.maxHealth;
                alert('already at full health');
            }
            buttonsAHY[4].removeEventListener('click', heal2)
            buttonsAHY[1].addEventListener('click', heal);
        }
    }

}


