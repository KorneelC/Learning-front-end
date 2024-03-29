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
        case "Staff":
            let mulitplierStaff = this.maxHealing * 1/5
            this.maxHealing = this.maxHealing + mulitplierStaff;
            this.min
            break;
        case "Sword":
            let mulitplierSword = this.maxDamage * 3/10
            this.maxDamage = this.maxDamage + mulitplierSword;
            break;
    }
}
let GameName = document.querySelector('.Gamename')
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

// arrow indicates who starts
let arrow1 = document.getElementById('arrow-p1');
let arrow2 = document.getElementById('arrow-p2');



function ready() {
    GameName.style.display = 'none'

    if (player1.value !='' && player2.value != '') {
        let person1 = new Person(player1.value, race.value, items.value)
        let person2 = new Person(player2.value, race1.value, items1.value)
        loghits.style.display = "";
        Playernames.style.display = "none"
        log.style.display = "";
        p1Ul.style.display ="block";
        p2Ul.style.display = "block";
        arrow1.style.display = "inline";

        
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
            button.classList.add('buttonsAYH')
            
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
                orc.style.transform ='scaleX(-1)';
                orc.src = 'resources/pictures/orc.png'
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
        switch (person1.item) {
            case "Boots":
                let Boots = document.createElement('img');
                Boots.src = 'resources/pictures/boots.webp';
                card[0].append(Boots);
                break;
            case "Bow":
                let Bow = document.createElement('img');
                Bow.src = 'resources/pictures/bow.png'
                card[0].append(Bow)
                break;
            case "Staff":
                let Staff = document.createElement('img');
                Staff.src = 'resources/pictures/staff.webp'
                card[0].append(Staff);
                break;
            case "Sword":
                let Sword = document.createElement('img');
                Sword.style.transform = "rotate(20deg)"
                Sword.src = 'resources/pictures/sword.webp'
                card[0].append(Sword);
                break;
        } 
           
        switch (person2.item) {
            case "Boots":
                let Boots = document.createElement('img');
                Boots.src = 'resources/pictures/boots.webp';
                Boots.classList.add('items2')
                card[1].append(Boots);
                break;
            case "Bow":
                let Bow = document.createElement('img');
                Bow.src = 'resources/pictures/bow.png'
                Bow.classList.add('items2')
                card[1].append(Bow)
                break;
            case "Staff":
                let Staff = document.createElement('img');
                Staff.src = 'resources/pictures/staff.webp'
                Staff.classList.add('items2');
                card[1].append(Staff);
                break;
            case "Sword":
                let Sword = document.createElement('img');
                Sword.src = 'resources/pictures/sword.webp';
                Sword.style.transform = "rotate(335deg)"
                Sword.classList.add('items2')
                card[1].append(Sword);
                break;
        }
        switch (person2.race) {
            case "Humans":
                let human = document.createElement('img');
                human.src = 'resources/pictures/human.png';
                human.classList.add('race2')
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
                elf.classList.add('race2')
                card[1].append();
                break;
            case "Vampires":
                let vampire = document.createElement('img');
                vampire.src = 'resources/pictures/vampire.png'
                vampire.classList.add('race2')
                card[1].append(vampire);
                break;
        }
        //gets all buttons
        let buttonsAHY = document.getElementsByTagName('button');
        console.log(buttonsAHY);

       
        let progressL = document.querySelectorAll('progress');

        //assigns the values of the progressbars for player 1 and 2
        progressL[0].max = person1.maxHealth
        progressL[0].value = person1.maxHealth;
        
        progressL[1].max = person2.maxHealth
        progressL[1].value = person2.maxHealth;
        let healthL = document.getElementsByTagName('div');
        healthL[6].innerText = person1.maxHealth + ' ' + 'current health';
        healthL[8].innerText = person2.maxHealth + ' ' + 'current health';
        
        //adds event to the buttons
        buttonsAHY[2].addEventListener('click', Surrender) 
        buttonsAHY[0].addEventListener('click', attack)
        buttonsAHY [5].addEventListener('click', Surrenderp2)

        function Surrender () {
            alert(person1.name + ' ' + 'chickens out');
            GameName.style.display = '';
            let NewGame = document.createElement('button');
            let Link = document.createElement('a');
            Link.href = "index.html"
            Link.innerText = "Retry"
            Link.style.textDecoration = "none"
            NewGame.append(Link);
            GameName.innerHTML = "";
            GameName.append(NewGame);
            for (i = 0; i <card.length; i++) {
            card[i].innerHTML = '';
            }

        }
        function Surrenderp2() {
            alert(person2.name + ' ' + 'chickens out');
            GameName.style.display = '';
            let GameName = document.querySelector('.Gamename');
            let NewGame = document.createElement('button');
            let Link = document.createElement('a');
            Link.href = "index.html"
            Link.innerText = "Retry"
            Link.style.textDecoration = "none"
            NewGame.append(Link);
            GameName.innerHTML = "";
            GameName.append(NewGame);
            for (i = 0; i < card.length; i++) {
                card[i].innerHTML =''
            }

        }

       
     
        //attack for player 1
        function attack() {
            arrow1.style.display = "none";
            arrow2.style.display= "inline";
            let p = document.createElement('p');
            let damage = Math.floor( Math.random() * (person1.maxDamage - person1.min)) + person1.min
            console.log(damage);
            switch (person2.race) {
                case 'Humans':
                    if (person2.item == "Boots") {
                        let DodgeChance = Math.random() * 100;
                        if (DodgeChance > 70) {
                            alert('haha I dodged your shitty attack')
                            damage = 0;
                            healthL[8].innerText = progressL[1].value + ' ' + 'current health'
                        }
                        else {
                            let reducedamage = Math.floor(0.8 * damage);
                            progressL[1].value = person2.currenthealth -= reducedamage;
                            healthL[8].innerText = progressL[1].value + ' ' + 'current health';
                            damage = reducedamage 
                            

                        }

                    }
                    else {
                        let reducedamage = Math.floor(0.8 * damage);
                        progressL[1].value = person2.currenthealth -= reducedamage;
                        healthL[8].innerText = progressL[1].value + ' ' + 'current health';
                        damage = reducedamage  
                    }
                                  
                    break;

                case 'Orcs':
                    if (person2.item == "Boots") {
                        let DodgeChance = Math.random() * 100;
                        if (DodgeChance > 70) {
                            alert('haha I dodged your shitty attack')
                            damage = 0;
                            healthL[8].innerText = progressL[1].value + ' ' + 'current health'
                        }
                        else {
                            progressL[1].value = person2.currenthealth -= damage;
                            healthL[8].innerText = progressL[1].value + ' ' + 'current health';
                        }

                    }
                    else {
                        progressL[1].value = person2.currenthealth -= damage;
                        healthL[8].innerText = progressL[1].value + ' ' + 'current health';
                    }
                    break;

                case 'Elves':
                    let ReflectChance = Math.random() * 100
                    if (ReflectChance > 70) {
                        alert('player 2 reflected the damage')
                        progressL[1].value = person2.currenthealth;
                        progressL[0].value = person1.currenthealth -= Math.floor(damage * 0.5);
                        healthL[6].innerText = progressL[0].value + ' ' + 'current health'
                    }

                    else {
                        if (person2.item == "Boots") {
                            let DodgeChance = Math.random() * 100;
                            if (DodgeChance > 70) {
                                alert('haha I dodged your shitty attack')
                                damage = 0;
                                healthL[8].innerText = progressL[1].value + ' ' + 'current health'
                            }
                            else {
                                progressL[1].value = person2.currenthealth -= damage;
                                healthL[8].innerText = progressL[1].value + ' ' + 'current health';
                            }
                        }
                    }
                    break;

                case 'Vampires':
                    if (person2.item == "Boots") {
                        let DodgeChance = Math.random() * 100;
                        if (DodgeChance > 70) {
                            alert('haha I dodged your shitty attack')
                            damage = 0;
                            healthL[8].innerText = progressL[1].value + ' ' + 'current health'
                        }
                        else {
                            progressL[1].value = person2.currenthealth -= damage;
                            healthL[8].innerText = progressL[1].value + ' ' + 'current health';
                        }

                    }
                    else {
                        progressL[1].value = person2.currenthealth -= damage;
                        healthL[8].innerText = progressL[1].value + ' ' + 'current health';
                    }
                    break;


            }

            if (person1.race == "Vampires") {
                    let lifeSteal = Math.floor(progressL[1].value * 0.03)
                    progressL[0].value += lifeSteal;
                    healthL[6].innerText = progressL[0].value + ' ' + 'current health';

            }

            switch (person1.item) {
                case "Bow":
                    let Chance = Math.random() * 100;
                    if (Chance > 70) {
                        let Double = Math.floor(Math.random() * (person1.maxDamage - person1.min)) + person1.min
                        progressL[1].value = person2.currenthealth -= Double ;
                        healthL[8].innerText = progressL[1].value + ' ' + 'current health';
                        damage += Double;
                        alert('You noob I hit you twice')
                        
                    }
                    break;
            }

            //gameover
            if (person2.currenthealth <= 0) {
                alert(person2.name + ' ' + 'loses');
                GameName.style.display = '';
                let NewGame = document.createElement('button');
                let Link = document.createElement('a');
                Link.href = "index.html"
                Link.innerText = "Retry"
                Link.style.textDecoration ="none"
                NewGame.append(Link);
                GameName.innerHTML = "";
                GameName.append(NewGame);
                for (t = 0; t < playWrap.length; t++) {
                    playWrap[t].style.display = "";
                }
                loghits.style.display = "none";
                Playernames.style.display = ""
                log.style.display = "none";
                p1Ul.style.display = "";
                p2Ul.style.display = "";
                let buttons = document.querySelectorAll('.buttonsAYH')
                for (i = 0; i < buttons.length; i++) {
                    buttons[i].style.display = "none"
                }
                let HealthDisplay = document.querySelectorAll('.hp-div');
                for (i = 0; i < HealthDisplay.length; i++) {
                    HealthDisplay[i].remove(HealthDisplay)

                }
                for (i = 0; i < progressL.length; i++) {
                    progressL[i].remove(progressL)
                    
                }
                let img = document.querySelectorAll('img');

                for (i = 0; i <= img.length; i++) {
                    img[i].remove(img)
                }
                
            }
        
            
            let p1Attack = person1.name + " " + "has dealt" + " " + damage + " " + "damage to" + " " + person2.name;
            p.append(p1Attack);
            loghits.insertBefore(p, loghits.childNodes[3])
            buttonsAHY[0].removeEventListener('click', attack)
            buttonsAHY[1].removeEventListener('click', heal)
            buttonsAHY[3].addEventListener('click', attack2);
            buttonsAHY[4].addEventListener('click', heal2);
        };

        //attack for player 2
        function attack2() {
            arrow1.style.display = "inline";
            arrow2.style.display = "none";
            let p = document.createElement('p');
            let damagep2 = Math.floor(Math.random() * (person2.maxDamage - person2.min)) + person2.min;
            console.log(damagep2);

            switch(person1.race) {
                case 'Humans':
                    if (person1.item == "Boots"){
                        let DodgeChance = Math.random() * 100;
                        if (DodgeChance > 70) {
                            alert('haha I dodged your shitty attack')
                            damagep2 = 0;
                            healthL[6].innerText = progressL[0].value + ' ' + 'current health'
                        }
                        else {
                            let reducedamage = Math.floor(0.8 * damagep2);
                            progressL[0].value = person1.currenthealth -= reducedamage;
                            healthL[6].innerText = progressL[0].value + ' ' + 'current health';
                            damagep2 = reducedamage
                        }

                    }
                    else {
                        let reducedamage = Math.floor(0.8 * damagep2);
                        progressL[0].value = person1.currenthealth -= reducedamage;
                        healthL[6].innerText = progressL[0].value + ' ' + 'current health';
                        damagep2 = reducedamage
                    }
                break;

                case 'Orcs':
                    if (person1.item == "Boots") {
                        let DodgeChance = Math.random() * 100;
                        if (DodgeChance > 70) {
                            alert('haha I dodged your shitty attack')
                            damagep2 = 0;
                            healthL[6].innerText = progressL[0].value + ' ' + 'current health'
                        }
                        else {
                            progressL[0].value = person1.currenthealth -= damagep2;
                            healthL[6].innerText = progressL[0].value + ' ' + 'current health';
                        }

                    }
                    else {
                        progressL[0].value = person1.currenthealth -= damagep2;
                        healthL[6].innerText = progressL[0].value + ' ' + 'current health';
                    }
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
                        if (person1.item == "Boots") {
                            let DodgeChance = Math.random() * 100;
                            if (DodgeChance > 70) {
                                alert('haha I dodged your shitty attack')
                                damagep2 = 0;
                                healthL[6].innerText = progressL[0].value + ' ' + 'current health'
                            }
                            else {
                                progressL[0].value = person1.currenthealth -= damagep2;
                                healthL[6].innerText = progressL[0].value + ' ' + 'current health';
                            }
                        }
                        

                    }
                    
                break;

                case 'Vampires':
                    if (person1.item == "Boots") {
                        let DodgeChance = Math.random() * 100;
                        if (DodgeChance > 70) {
                            alert('haha I dodged your shitty attack')
                            damagep2 = 0;
                            healthL[6].innerText = progressL[0].value + ' ' + 'current health'
                        }
                        else {
                            progressL[0].value = person1.currenthealth -= damagep2;
                            healthL[6].innerText = progressL[0].value + ' ' + 'current health';
                        }

                    }
                    else {
                        progressL[0].value = person1.currenthealth -= damagep2;
                        healthL[6].innerText = progressL[0].value + ' ' + 'current health';
                    }
                break;


            }

            if (person2.race == "Vampires") {
                let lifeSteal = Math.floor(progressL[1].value * 0.03)
                progressL[1].value += lifeSteal;
                healthL[8].innerText = progressL[1].value + ' ' + 'current health';

            }
    
            switch (person2.item) {
                case "Bow":
                    let Chance = Math.random() * 100;
                    if (Chance > 70) {
                        Double =  Math.floor(Math.random() * (person2.maxDamage - person2.min)) + person2.min
                        progressL[0].value = person1.currenthealth -= Double ;
                        healthL[6].innerText = progressL[0].value + ' ' + 'current health';
                        damagep2+= Double
                        alert('You noob I hit you twice')
                        
                    }
                    break;
            }
            if (person1.currenthealth <= 0 || person2.currenthealth <= 0) {
                alert(person1.name+' '+'loses');
                GameName.style.display = '';
                let NewGame = document.createElement('button');
                let Link = document.createElement('a');
                Link.href = "index.html"
                Link.innerText = "Retry"
                Link.style.textDecoration = "none"
                NewGame.append(Link);
                GameName.innerHTML = "";
                GameName.append(NewGame);
                for (t = 0; t < playWrap.length; t++) {
                    playWrap[t].style.display = "";
                }
                loghits.style.display = "none";
                Playernames.style.display = ""
                log.style.display = "none";
                p1Ul.style.display = "";
                p2Ul.style.display = "";
                let buttons = document.querySelectorAll('.buttonsAYH')
                for (i = 0; i < buttons.length; i++) {
                    buttons[i].remove(buttons); 
                }
                let HealthDisplay = document.querySelectorAll('.hp-div');
                for (i = 0; i < HealthDisplay.length; i++) {
                    HealthDisplay[i].remove(HealthDisplay)

                }
                for (i = 0; i < progressL.length; i++) {
                    progressL[i].remove(progressL)
                }
                let img = document.querySelectorAll('img');

                for (j = 0; j <= img.length; j++) {
                    img[j].remove(img)
                }

            }
            let p2Attack = person2.name + " " + "has dealt" + " " + damagep2 + " " + "damage to" + " " + person1.name;
            p.append(p2Attack)
            loghits.insertBefore(p, loghits.childNodes[3])
            
            buttonsAHY[0].addEventListener('click', attack);
            buttonsAHY[1].addEventListener('click', heal)
            buttonsAHY[3].removeEventListener('click', attack2)
            buttonsAHY[4].removeEventListener('click', heal2);
        }; 
       

        //heal functions

        //heal for player 1
        buttonsAHY[1].addEventListener('click', heal)
       
        function heal() {
            arrow1.style.display = "none";
            arrow2.style.display = "inline";
            let p = document.createElement('p');
            let healp1 = Math.floor(Math.random() * (person1.maxHealing - person1.min)) + person1.min
            progressL[0].value = person1.currenthealth += healp1;
            healthL[6].innerText = progressL[0].value + ' ' + 'current health'
            if (person1.currenthealth > person1.maxHealth) {
                progressL[0].value = person1.maxHealth;
                alert('already at full health');
            }
            let p1Heal = "Player 1 has healt for" + " " + healp1 + " " + "hitpoints";
            p.append(p1Heal);
            loghits.insertBefore(p, loghits.childNodes[3])
            buttonsAHY[0].removeEventListener('click', attack)
            buttonsAHY[1].removeEventListener('click', heal)
            buttonsAHY[3].addEventListener('click', attack2);
            buttonsAHY[4].addEventListener('click', heal2);
        }

        // heal for player 2
        function heal2() {
            arrow1.style.display = "inline";
            arrow2.style.display = "none";
            let p = document.createElement('p');
            let healp2 = Math.floor(Math.random() * (person2.maxHealing - person2.min)) + person2.min
            progressL[1].value = person2.currenthealth += healp2 ;
            healthL[8].innerText = progressL[1].value + ' ' + 'current health'
            if (person2.currenthealth > person2.maxHealth) {
                progressL[1].value = person2.maxHealth;
                alert('already at full health');
            }
            let p2Heal = "Player 2 has healt himself for" + " " + healp2 + " " + "hitpoints";
            p.append(p2Heal);
            loghits.insertBefore(p, loghits.childNodes[3])
    

            buttonsAHY[0].addEventListener('click', attack);
            buttonsAHY[1].addEventListener('click', heal)
            buttonsAHY[3].removeEventListener('click', attack2)
            buttonsAHY[4].removeEventListener('click', heal2);
        }
    }
    else {
        alert('Please fill in both fields')
    }
}



