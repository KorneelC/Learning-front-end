function Person(name, race, item) {
    this.name = name;
    this.race = race;
    this.item = item;
    this.currenthealth = 100;
    this.maxHealth = 100;
switch (race){
    case "Humans":
      
    break;

    case "Orcs":
        this.maxHealth = 140;
        this.currenthealth = 140;
        
    break;

    case "Elves":
        this.maxHealth = 100;
        this.currenthealth = 100;
        
    break;
    case "Falmer":
        this.maxHealth = 100;
        this.currenthealth = 100;
        
    break;
}

    this.min = 3;
    this.maxDamage = 20;
    this.maxHealing = 20;

    this.heal = function (Healing) {
        Healing = Math.floor(Math.random() * (this.maxHealing - this.min)) + this.min;
        return Healing


    };
    this.totalHeal = this.heal();

    
    this.totalDamage;
    this.damage = function (damagee) {

        switch(race) {
            case "Humans":
                damagee = Math.floor(0.8 * Math.random() * (this.maxDamage - this.min)) + this.min;
                this.totalDamage = damagee

            break;

            case "Orcs":
                damagee = Math.floor(1.1 * Math.random() * (this.maxDamage - this.min)) + this.min;
                this.totalDamage = damagee

            break;

            case "Elves":
                damagee = Math.floor(0.7 * Math.random() * (this.maxDamage - this.min)) + this.min;
                this.totalDamage = damagee

            break;

            case "Falmer":
                damagee = Math.floor(1.1 * Math.random() * (this.maxDamage - this.min)) + this.min;
                this.totalDamage = damagee

            break;

            default:
                damagee = Math.floor(Math.random() * (this.maxDamage - this.min)) + this.min;
                this.totalDamage = damagee
        }

        return damagee
    };
    
    switch (item) {
        case "Staff":
            let mulitplierStaff = this.maxHealing * 1 / 5
            this.maxHealing = this.maxHealing + mulitplierStaff;
            this.min
            break;
        case "Sword":
            let mulitplierSword = this.maxDamage * 3 / 10
            this.maxDamage = this.maxDamage + mulitplierSword;
            break;
    }

   

    this.displayChar = function () {
        return `I am a ${this.race}, I wield a ${this.item}, my total health point are ${this.maxHealth}`;
    };
    this.char = this.displayChar();
};
let create = document.getElementById('create');
create.addEventListener('click', ready)


//players info on create
let Gametitle = document.getElementById('title-game');
let PlayerWrap = document.querySelectorAll('.player-wrap');
let PlayerWrapSelect = document.querySelectorAll('.player-wrap > select');
let PlayerWrapInput = document.querySelectorAll('.player-wrap > input');
let PlayerWrapP = document.querySelectorAll('.player-wrap > p');

let CardContent = document.querySelectorAll('.card-content');

//arrows indicates who starts
let arrow1 = document.getElementById('arrow-p1')
let arrow2 = document.getElementById('arrow-p2')

let race = document.getElementById('race');
let race1 = document.getElementById('race1')
let items = document.getElementById('items')
let items1 = document.getElementById('items1');
let player1 = document.getElementById('playername');

let player2 = document.getElementById('Playername1');



// hpbar of the characters
let HpBar = document.getElementsByTagName('progress');

//attackbuttons
let AttackButton = document.querySelectorAll('.attack');

// healbuttons
let HealButton = document.querySelectorAll('.heal');

//yieldbuttons
let YieldButton = document.querySelectorAll('.yield');

//log of the hits
let log = document.getElementById('log-hh');

//gets the image-containers
let imagePerson1 = document.getElementById('img-wrapper1');
let imagePerson2 = document.getElementById('img-wrapper2');



function ready () {
    let playerOne = new Person(player1.value, race.value, items.value)
    let playerTwo = new Person(player2.value, race1.value, items1.value)
    console.log(playerOne,playerTwo)
    
    //loop for the select fields --> makes them invisible
    for (i = 0; i < PlayerWrapSelect.length; i++) {
        PlayerWrapSelect[i].style.display = 'none';
    }
    //loop for input --> makes them invisible
    for (i = 0; i < PlayerWrapInput.length; i++) {
        PlayerWrapInput[i].style.display = 'none';
    }
    //loop for the p elements --> makes them invisible
    for (i = 0; i < PlayerWrapP.length; i++) {
        PlayerWrapP[i].style.display = 'none';
    }
    for (let i = 0; i < CardContent.length; i++) {
        CardContent[i].style.display = "block";

    }
   
    //removes the create button
    create.style.display ="none";
    //adds the log of moves
    log.style.display = "block";
    //removes the previous height of the playerwrap
    for (let i = 0; i < PlayerWrap.length; i++) {
        PlayerWrap[i].style.height = "100%"
    }

    //P1 list
    let p1name = document.getElementById('name-p1')
    p1name.append(playerOne.name);
    let p1race = document.getElementById('race-p1')
    p1race.append(playerOne.race);
    let p1item = document.getElementById('item-p1')
    p1item.append(playerOne.item);
    //P2 list
    let p2name = document.getElementById('name-p2')
    p2name.append(playerTwo.name);
    let p2race = document.getElementById('race-p2')
    p2race.append(playerTwo.race);
    let p2item = document.getElementById('item-p2')
    p2item.append(playerTwo.item);
    HpBar[0].max = playerOne.maxHealth;
    HpBar[0].value = playerOne.currenthealth
    HpBar[1].max = playerTwo.maxHealth;
    HpBar[1].value = playerTwo.currenthealth


    let HitpointsP = document.querySelectorAll('.hpdiv');
    for (i = 0; i < HitpointsP.length;i++) {
        HitpointsP[0].innerText = playerOne.currenthealth +'/' +playerOne.maxHealth +' '+ 'hitpoints';
        HitpointsP[1].innerText = playerTwo.currenthealth + '/' + playerTwo.maxHealth + ' ' + 'hitpoints';
    }
    switch (playerOne.race) {
        case "Humans":
            let human = document.createElement('img');
            human.src = 'images/human.png';
            imagePerson1.append(human);
            break;
        case "Orcs":
            let orc = document.createElement('img');
            orc.src = 'images/orc.png'
            imagePerson1.append(orc)
            break;
        case "Elves":
            let elf = document.createElement('img');
            elf.src = 'images/elf.png'
            imagePerson1.append(elf);
            break;
        case "Falmer":
            let Falmer = document.createElement('img');
            Falmer.src = 'images/Falmer.webp'
            imagePerson1.append(Falmer);
            break;
    }
    switch (playerOne.item) {
        case "Axe":
            let Axe = document.createElement('img');
            Axe.src = 'images/axe.webp';
            Axe.style.transform = 'scaleX(-1)';
            imagePerson1.append(Axe);
            break;
        case "Bow":
            let Bow = document.createElement('img');
            Bow.src = 'images/bow.webp'
            Bow.style.transform = 'scale(-1)';
            imagePerson1.append(Bow)
            break;
        case "Staff":
            let Staff = document.createElement('img');
            Staff.src = 'images/staff.webp'
            imagePerson1.append(Staff);
            break;
        case "Sword":
            let Sword = document.createElement('img');
            Sword.style.transform = "rotate(20deg)"
            Sword.src = 'images/sword.webp'
            imagePerson1.append(Sword);
            break;
    }

    switch (playerTwo.item) {
        case "Axe":
            let Axe = document.createElement('img');
            Axe.src = 'images/axe.webp';
            Axe.classList.add('items2')
            imagePerson2.append(Axe);
            break;
        case "Bow":
            let Bow = document.createElement('img');
            Bow.src = 'images/bow.webp'
            Bow.classList.add('items2')
            imagePerson2.append(Bow)
            break;
        case "Staff":
            let Staff = document.createElement('img');
            Staff.src = 'images/staff.webp'
            Staff.style.transform = 'scaleX(-1)';
            Staff.classList.add('items2');
            imagePerson2.append(Staff);
            break;
        case "Sword":
            let Sword = document.createElement('img');
            Sword.src = 'images/sword.webp';
            Sword.style.transform = "rotate(335deg)"
            Sword.classList.add('items2')
            imagePerson2.append(Sword);
            break;
    }
    
    switch (playerTwo.race) {
        case "Humans":
            let human = document.createElement('img');
            human.src = 'images/human.png';
            human.classList.add('race2')
            imagePerson2.append(human);
            break;
        case "Orcs":
            let orc = document.createElement('img');
            orc.src = 'images/orc.png'
            imagePerson2.append(orc)
            break;
        case "Elves":
            let elf = document.createElement('img');
            elf.src = 'images/elf.png'
            elf.classList.add('race2')
            imagePerson2.append();
            break;
        case "Falmer":
            let Falmer = document.createElement('img');
            Falmer.src = 'images/Falmer.webp'
            Falmer.classList.add('race2')
            imagePerson2.append(Falmer);
            break;
    }

    //decides who starts
    let Coin = Math.floor(Math.random() * 100);
    for (i = 0; i < AttackButton.length; i++);
    for (i = 0; i < HealButton.length; i++);
    for (i = 0; i < YieldButton.length; i++);
    YieldButton[0].addEventListener('click', yieldp1);
    YieldButton[1].addEventListener('click', yieldp2);
    if (Coin > 50) {
        arrow1.style.visibility ='hidden'
        //changes title to player 2 starts
        Gametitle.innerText = 'Player 2 starts';
        AttackButton[1].addEventListener('click', attackp2);
        HealButton[1].addEventListener('click', healp2);
        
        
    }
    else {
        arrow2.style.visibility = 'hidden'
        //changes title to player 1 starts
        Gametitle.innerText = 'Player 1 starts';
        AttackButton[0].addEventListener('click', attackp1);
        HealButton[0].addEventListener('click', healp1);
 
    }
    function attackp1() {
        HpBar[1].value = playerTwo.currenthealth -= playerOne.damage()
        let p = document.createElement('p');
        HitpointsP[1].innerText = playerTwo.currenthealth + '/' + playerTwo.maxHealth + ' ' + 'hitpoints';
        Gametitle.innerText = 'Fight'
        AttackButton[0].removeEventListener('click', attackp1);
        HealButton[0].removeEventListener('click', healp1);
        
        // adds the option so player 2 can attack after player 1
        AttackButton[1].addEventListener('click', attackp2);
        HealButton[1].addEventListener('click', healp2);
        
        // logs the move of the attack
        p.innerText = ` ${playerOne.name} dealt ${playerOne.totalDamage} damage to ${playerTwo.name}, ${playerTwo.name} has ${HpBar[1].value} hipoints left`
        log.insertBefore(p, log.childNodes[3])
        
        //shows who's turn it is
        arrow1.style.visibility ='hidden';
        arrow2.style.visibility ='';
        
        // if one of the players loses
        if (playerOne.currenthealth <= 0 || playerTwo.currenthealth <= 0){
            for (i = 0; i < PlayerWrapSelect.length; i++) {
                PlayerWrapSelect[i].style.display = '';
            }
            //loop for input --> makes them visible
            for (i = 0; i < PlayerWrapInput.length; i++) {
                PlayerWrapInput[i].style.display = '';
            }
            //loop for the p elements --> makes them visible
            for (i = 0; i < PlayerWrapP.length; i++) {
                PlayerWrapP[i].style.display = '';
            }
            for (let i = 0; i < CardContent.length; i++) {
                CardContent[i].style.display = "";

            }

            //adds the create button
            create.style.display = "";
            //removes the log of moves
            log.style.display = "";
            //removes the previous height of the playerwrap
            for (let i = 0; i < PlayerWrap.length; i++) {
                PlayerWrap[i].style.height = "110vh"
            }
            //removes the images
            imagePerson1.parentNode.removeChild(imagePerson1);
            imagePerson2.parentNode.removeChild(imagePerson2);

            // log innertext reset
            log.innerText = "LOG OF HITS";


        }
    } 

    function attackp2 () {
        HpBar[0].value = playerOne.currenthealth -= playerTwo.damage()
        let p = document.createElement('p');
        HitpointsP[0].innerText = playerOne.currenthealth + '/' + playerOne.maxHealth + ' ' + 'hitpoints';
        Gametitle.innerText = 'Fight'
        AttackButton[1].removeEventListener('click', attackp2);
        HealButton[1].removeEventListener('click', healp2);
        
        // adds the option so player 1 can attack after player 2
        AttackButton[0].addEventListener('click', attackp1);
        HealButton[0].addEventListener('click', healp1)
        
        //log the move of the attack
        p.innerText = ` ${playerTwo.name} dealt ${playerTwo.totalDamage} damage to ${playerOne.name}, ${playerOne.name} has ${HpBar[0].value} hipoints left`
        log.insertBefore(p, log.childNodes[3])
        
        //shows who's turn it is
        arrow2.style.visibility = 'hidden';
        arrow1.style.visibility = '';

        // if one of the players loses
        if (playerOne.currenthealth <= 0 || playerTwo.currenthealth <= 0) {
            for (i = 0; i < PlayerWrapSelect.length; i++) {
                PlayerWrapSelect[i].style.display = '';
            }
            //loop for input --> makes them visible
            for (i = 0; i < PlayerWrapInput.length; i++) {
                PlayerWrapInput[i].style.display = '';
            }
            //loop for the p elements --> makes them visible
            for (i = 0; i < PlayerWrapP.length; i++) {
                PlayerWrapP[i].style.display = '';
            }
            for (let i = 0; i < CardContent.length; i++) {
                CardContent[i].style.display = "";

            }

            //adds the create button
            create.style.display = "";
            //removes the log of moves
            log.style.display = "";
            //removes the previous height of the playerwrap
            for (let i = 0; i < PlayerWrap.length; i++) {
                PlayerWrap[i].style.height = "110vh"
            }
            //removes the images
            imagePerson1.parentNode.removeChild(imagePerson1);
            imagePerson2.parentNode.removeChild(imagePerson2);

            // log innertext reset
            log.innerText = "Log of hits";

        }

    }
    function healp1() {
        HpBar[0].value = playerOne.currenthealth += playerOne.heal()
        if (playerOne.currenthealth >= playerOne.maxHealth) {
            playerOne.currenthealth = playerOne.maxHealth;
            HitpointsP[0].innerText = playerOne.currenthealth + '/' + playerOne.maxHealth + ' ' + 'hitpoints';
        }
        HitpointsP[0].innerText = playerOne.currenthealth + '/' + playerOne.maxHealth + ' ' + 'hitpoints';
        AttackButton[0].removeEventListener('click', attackp1);
        HealButton[0].removeEventListener('click', healp1)
        // adds the option so player 2 can attack or heal after player 1
        AttackButton[1].addEventListener('click', attackp2);
        HealButton[1].addEventListener('click', healp2);
        //shows who's turn it is
        arrow1.style.visibility = 'hidden';
        arrow2.style.visibility = '';
       
    }

    function healp2() {
        HpBar[1].value = playerTwo.currenthealth += playerTwo.heal()
        if (playerTwo.currenthealth >= playerTwo.maxHealth) {
            playerTwo.currenthealth = playerTwo.maxHealth;
            HitpointsP[1].innerText = playerTwo.currenthealth + '/' + playerTwo.maxHealth + ' ' + 'hitpoints';
        }
        HitpointsP[1].innerText = playerTwo.currenthealth + '/' + playerTwo.maxHealth + ' ' + 'hitpoints';
        AttackButton[1].removeEventListener('click', attackp2);
        HealButton[1].removeEventListener('click', healp2)
        // adds the option so player 1 can attack or heal after player 2
        AttackButton[0].addEventListener('click', attackp1);
        HealButton [0].addEventListener('click', healp1);
        //shows who's turn it is
        arrow2.style.visibility = 'hidden';
        arrow1.style.visibility = '';

    } 
    
    function yieldp1() {
        for (i = 0; i < PlayerWrapSelect.length; i++) {
            PlayerWrapSelect[i].style.display = '';
        }
        //loop for input --> makes them visible
        for (i = 0; i < PlayerWrapInput.length; i++) {
            PlayerWrapInput[i].style.display = '';
        }
        //loop for the p elements --> makes them visible
        for (i = 0; i < PlayerWrapP.length; i++) {
            PlayerWrapP[i].style.display = '';
        }
        for (let i = 0; i < CardContent.length; i++) {
            CardContent[i].style.display = "";

        }

        //adds the create button
        create.style.display = "";
        //removes the log of moves
        log.style.display = "";
        //removes the previous height of the playerwrap
        for (let i = 0; i < PlayerWrap.length; i++) {
            PlayerWrap[i].style.height = "110vh"
        }
        //removes the images
        imagePerson1.parentNode.removeChild(imagePerson1);
        imagePerson2.parentNode.removeChild(imagePerson2);

        // log innertext reset
        log.innerText = "Log of hits";
        //
        Gametitle.innerText = ` ${playerOne.name} Chickend out
        ${playerTwo.name} won`

    }

    function yieldp2() {
        for (i = 0; i < PlayerWrapSelect.length; i++) {
            PlayerWrapSelect[i].style.display = '';
        }
        //loop for input --> makes them visible
        for (i = 0; i < PlayerWrapInput.length; i++) {
            PlayerWrapInput[i].style.display = '';
        }
        //loop for the p elements --> makes them visible
        for (i = 0; i < PlayerWrapP.length; i++) {
            PlayerWrapP[i].style.display = '';
        }
        for (let i = 0; i < CardContent.length; i++) {
            CardContent[i].style.display = "";

        }

        //adds the create button
        create.style.display = "";
        //removes the log of moves
        log.style.display = "";
        //removes the previous height of the playerwrap
        for (let i = 0; i < PlayerWrap.length; i++) {
            PlayerWrap[i].style.height = "110vh"
        }
        //removes the images
        imagePerson1.parentNode.removeChild(imagePerson1);
        imagePerson2.parentNode.removeChild(imagePerson2);

        // log innertext reset
        log.innerText = "Log of hits";
        //
        Gametitle.innerText = ` ${playerTwo.name} Chickend out
        ${playerOne.name} won`

    }
        

}


