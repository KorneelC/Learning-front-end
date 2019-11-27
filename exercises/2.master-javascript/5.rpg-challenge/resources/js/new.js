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
            let image = document.getElementsByTagName('img');
            console.log(image);
            image.src ='resources/pictures/human.png';
            break;
        case "Orcs":
            this.maxHealth = 140;
            this.currenthealth = 140;
            let orc = document.getElementsByTagName('img');
            orc.src = 'resources/pictures/orc.png'
            break;
        case "Elves":
            let elf = document.getElementsByTagName('img');
            elf.src = 'resources/pictures/elf.png'
            break;
        case "Vampires":
            let vampire = document.getElementsByTagName('img');
            vampire.src = 'resources/pictures/vampire.png'
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

log.style.display = "none";
let btnwrap = document.querySelector('.card-wrap');
let Playernames = document.querySelector('#create');
Playernames.addEventListener('click', ready);

let p1Ul = document.getElementById('p1');
let p2Ul = document.getElementById('p2');
let loghits = document.getElementById('log-hh');

loghits.style.display ="none";
function ready() {

    if (player1.value !='' && player2.value != '') {
        let person1 = new Person(player1.value, race.value, items.value)
        let person2 = new Person(player2.value, race1.value, items1.value)
        loghits.style.display = "";
        Playernames.style.display = "none"
        log.style.display = "";
        p1Ul.style.display ="block";
        p2Ul.style.display = "block";
        //P1 list
        let p1name = document.getElementById('name-p1')
        p1name.append(person1.name);
        let p1race = document.getElementById('race-p1')
        p1race.append(person1.race);
        let p1item = document.getElementById('item-p1')
        p1item.append(person1.item);
        //P2 list
        let p2name = document.getElementById('name-p2')
        p2name.append(person2.name);
        let p2race = document.getElementById('race-p2')
        p2race.append(person2.race);
        let p2item = document.getElementById('item-p2')
        p2item.append(person2.item);

        
        //shows options elves etc.
        let playWrap = document.querySelectorAll('.player-wrap');
        
        for (t = 0; t < playWrap.length; t++) {
            playWrap[t].style.display = "none";
        }
       
        
        let card = document.querySelectorAll('.card')
        for (let i = 0; i < card.length; i++) {
            let progress = document.createElement('progress');
            let br = document.createElement('br');
            

            let Healthdiv = document.createElement('div');
            Healthdiv.classList.add('hp-div');
           
            Healthdiv.innerText = progress.value + ' ' + 'current health';
            card[i].append(progress, Healthdiv);

            for (x = 0; x < 3; x++){
            let button = document.createElement('button');
            
            card[i].append(button,br);
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
        switch (person1.race) {
            case "Humans":
                let human = document.createElement('img');
                human.src = 'resources/pictures/human.png';
                card[0].append(human);
                break;
            case "Orcs":
                let orc = document.createElement('img');
                orc.src = 'resources/pictures/orc.png'
                console.log(orc);
                card[0].append(orc)
                break;
            case "Elves":
                let elf = document.createElement('img');
                elf.src = 'resources/pictures/elf.png'
                card[0].append(elf);
                break;
            case "Vampires":
                let vampire = document.createElement('img');
                vampire.src = 'resources/pictures/vampire.png'
                card[0].append(vampire);
                break;
        }

        switch (person2.race) {
            case "Humans":
                let human = document.createElement('img');
                human.src = 'resources/pictures/human.png';
                card[1].append(human);
                break;
            case "Orcs":
                let orc = document.createElement('img');
                orc.src = 'resources/pictures/orc.png'
                card[1].append(orc)
                break;
            case "Elves":
                let elf = document.createElement('img');
                elf.src = 'resources/pictures/elf.png'
                card[1].append();
                break;
            case "Vampires":
                let vampire = document.createElement('img');
                vampire.src = 'resources/pictures/vampire.png'
                card[1].append(vampire);
                break;
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
        healthL[6].innerText = person1.maxHealth + ' ' + 'current health';
        healthL[8].innerText = person2.maxHealth + ' ' + 'current health';


       
     
        //attack for player 1
        function attack() {
            let p = document.createElement('p');
            let damage = Math.floor(0.8 * Math.random() * (person1.maxDamage - person1.min)) + person1.min
            switch (person2.race) {
                case 'Humans':
                    let reducedamage = person2.currenthealth -= Math.floor(0.8 * damage);
                    progressL[1].value = reducedamage;
                    healthL[8].innerText = progressL[1].value + ' ' + 'current health';
                    break;

                case 'Orcs':
                    progressL[1].value = person2.currenthealth -= damage;
                    healthL[8].innerText = progressL[1].value + ' ' + 'current health';
                    break;

                case 'Elves':
                    let ReflectChance = Math.random() * 100
                    if (ReflectChance > 70) {
                        alert('player 1 reflected the damage')
                        progressL[1].value = person2.currenthealth;
                        progressL[0].value = person1.currenthealth -= Math.floor(damage * 0.5);
                        healthL[6].innerText = progressL[0].value + ' ' + 'current health'
                    }
                    else {
                        progressL[1].value = person2.currenthealth -= damage;
                        healthL[8].innerText = progressL[1].value + ' ' + 'current health';

                    }

                    break;

                case 'Vampires':
                    progressL[1].value = person2.currenthealth -= damage;
                    healthL[8].innerText = progressL[1].value + ' ' + 'current health';
                    break;


            }

            switch (person1.race) {
                case 'Humans':

                    break;

                case 'Orcs':

                    break;

                case 'Elves':

                    break;

                case 'Vampires':
                    progressL[0].value += Math.floor(progressL[0].value * 0.03);
                    progressL[1].value = person2.currenthealth -= damage;
                    healthL[8].innerText = progressL[1].value + ' ' + 'current health';
                    healthL[6].innerText = progressL[0].value + ' ' + 'current health';
                    break;

            }

            switch (person2.item) {
                case "Boots":
                    let DodgeChance = Math.random() * 100;
                    if (DodgeChance > 70) {
                        progressL[1].value += damage;
                        healthL[8].innerText = progressL[1].value + ' ' + 'current health'
                    }

                    break;

            }
            switch (person1.item) {
                case "Bow":
                    let Chance = Math.random() * 100;
                    if (Chance > 70) {
                        progressL[1].value = person2.currenthealth -= Math.floor(Math.random() * (person1.maxDamage - person1.min)) + person1.min;
                        healthL[8].innerText = progressL[1].value + ' ' + 'current health';
                    }
                    break;
            }
           
            

            if (person2.currenthealth <= 0) {
                alert('player 2 loses')
                
            }
            
            let p1Attack = "Player 1 has dealt" + " " + damage + " " + "damage to Player 2";
            p.append(p1Attack);
            loghits.insertBefore(p, loghits.childNodes[3])
            buttonsAHY[0].removeEventListener('click', attack)
            buttonsAHY[1].removeEventListener('click', heal)
            buttonsAHY[3].addEventListener('click', attack2);
        };

        //attack for player 2
        function attack2() {
            let p = document.createElement('p');
            let damagep2 = Math.floor(Math.random() * (person2.maxDamage - person2.min)) + person2.min;
            console.log(damagep2);

            switch(person1.race) {
                case 'Humans':
                    let reducedamage = person1.currenthealth -= Math.floor(0.8 * damagep2);
                    progressL[0].value = reducedamage;
                    healthL[6].innerText = progressL[0].value + ' ' + 'current health';
                break;

                case 'Orcs':
                    progressL[0].value = person1.currenthealth -= damagep2;
                    healthL[6].innerText = progressL[0].value + ' ' + 'current health';
                break;

                case 'Elves':
                    let ReflectChance = Math.random() * 100
                    if(ReflectChance > 70) {
                        alert('player 1 reflected the damage')
                        progressL[0].value = person1.currenthealth;
                        progressL[1].value = person2.currenthealth -= Math.floor(damagep2 *0.5);
                        healthL[8].innerText = progressL[1].value + ' ' + 'current health'
                    }
                    else {
                        progressL[0].value = person1.currenthealth -= damagep2;
                        healthL[6].innerText = progressL[0].value + ' ' + 'current health';

                    }
                    
                break;

                case 'Vampires':
                    progressL[0].value = person1.currenthealth -= damagep2;
                    healthL[6].innerText = progressL[0].value + ' ' + 'current health';
                break;


            }

            switch(person2.race) {
                case 'Humans':
                    
                    break;

                case 'Orcs':
                    
                    break;

                case 'Elves':

                    break;

                case 'Vampires':
                    progressL[1].value += Math.floor(progressL[1].value * 0.03);
                    progressL[0].value = person1.currenthealth -= damagep2;
                    healthL[6].innerText = progressL[0].value + ' ' + 'current health';
                    healthL[8].innerText = progressL[1].value + ' ' + 'current health';
                    break;

            }
            
            switch(person1.item) {
                case "Boots":
                    let DodgeChance = Math.random() * 100;
                    if (DodgeChance > 70) {
                        progressL[0].value += damagep2;
                        healthL[6].innerText = progressL[0].value + ' ' + 'current health'
                    }
                break;

            }
            switch (person2.item) {
                case "Bow":
                    let Chance = Math.random() * 100;
                    if (Chance > 70) {
                        progressL[0].value = person1.currenthealth -= Math.floor(Math.random() * (person2.maxDamage - person2.min)) + person2.min;
                        healthL[6].innerText = progressL[0].value + ' ' + 'current health';
                    }
                    break;
            }

            if (person1.currenthealth <= 0) {
                alert('player 1 loses')
                
            }
           

           
            let p2Attack = "Player 2 has dealt" + " " + damagep2 + " " + "damage to Player 1";
            p.append(p2Attack)
            loghits.insertBefore(p, loghits.childNodes[3])
            buttonsAHY[3].removeEventListener('click', attack2)
            buttonsAHY[0].addEventListener('click', attack);
        }; 

        //heal functions

        //heal for player 1
        buttonsAHY[1].addEventListener('click', heal)
       
        function heal() {
            let p = document.createElement('p');
            let healp1 = Math.floor(Math.random() * (person1.maxHealing - person1.min)) + person1.min
            progressL[0].value = person1.currenthealth += healp1;
            healthL[6].innerText = progressL[0].value + ' ' + 'current health'
            console.log(person1);
            if (person1.currenthealth > person1.maxHealth) {
                progressL[0].value = person1.maxHealth;
                alert('already at full health');
            }
            let p1Heal = "Player 1 has healt for" + " " + healp1 + " " + "hitpoints";
            p.append(p1Heal);
            loghits.insertBefore(p, loghits.childNodes[3])
            buttonsAHY[1].removeEventListener('click', heal)
            buttonsAHY[4].addEventListener('click', heal2);
        }

        // heal for player 2
        function heal2() {
            let p = document.createElement('p');
            let healp2 = Math.floor(Math.random() * (person2.maxHealing - person2.min)) + person2.min
            progressL[1].value = person2.currenthealth += healp2 ;
            console.log(person2);
            healthL[8].innerText = progressL[1].value + ' ' + 'current health'
            if (person2.currenthealth > person2.maxHealth) {
                progressL[1].value = person2.maxHealth;
                alert('already at full health');
            }
            let p2Heal = "Player 2 has healt for" + " " + healp2 + " " + "hitpoints";
            p.append(p2Heal);
            loghits.insertBefore(p, loghits.childNodes[3])
    
            buttonsAHY[4].removeEventListener('click', heal2)
            buttonsAHY[1].addEventListener('click', heal);
        }
    }
    else {
        alert('Please fill in both fields')
    }
}



