let HpBar = document.getElementsByTagName('progress');


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
        this.maxHealth = 80;
        this.currenthealth = 80;
        
    break;
    case "Falmer":
        this.maxHealth = 80;
        this.currenthealth = 80;
        
    break;
}

    this.min = 3;
    this.maxDamage = 20;
    this.maxHealing = 30;

    this.heal = function () {
        let healing = Math.floor(Math.random() * (this.maxHealing - this.min)) + this.min;
        return healing;
    
    };
    this.totalHeal = this.heal();

    this.damage = function () {
        let dmg = Math.floor(Math.random() * (this.maxDamage - this.min)) + this.min;
        return dmg
    };

    this.totalDamage = this.damage();

    this.displayChar = function () {
        return `I am a ${this.race}, I wield a ${this.item}, my total health point are ${this.maxHealth}`;
    };
    this.char = this.displayChar();
};
let create = document.getElementById('create');
create.addEventListener('click', ready)
console.log(create);
//players info on create
let Gametitle = document.getElementById('title-game');
let PlayerWrap = document.querySelectorAll('.player-wrap');
let PlayerWrapSelect = document.querySelectorAll('.player-wrap > select');
let PlayerWrapInput = document.querySelectorAll('.player-wrap > input');
let PlayerWrapP = document.querySelectorAll('.player-wrap > p');

let CardContent = document.querySelectorAll('.card-content');

let arrow1 = document.getElementById('arrow-p1')
let arrow2 = document.getElementById('arrow-p2')

let race = document.getElementById('race');
let race1 = document.getElementById('race1')
let items = document.getElementById('items')
let items1 = document.getElementById('items1');
let player1 = document.getElementById('playername');

let player2 = document.getElementById('Playername1');

let imagePerson1 = document.getElementById('img-wrapper1');
let imagePerson2 = document.getElementById('img-wrapper2');

let AttackButton = document.querySelectorAll('.attack')

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
    //changes title to fight
    Gametitle.innerText = 'Fight';
    //removes the create button
    create.style.display ="none";
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
            Falmer.src = 'images/vampire.png'
            imagePerson1.append(Falmer);
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
            Falmer.src = 'images/vampire.png'
            Falmer.classList.add('race2')
            imagePerson2.append(Falmer);
            break;
    }

    //decides who starts
    let Coin = Math.floor(Math.random() * 100);
    for (i = 0; i < AttackButton.length; i++)
    if (Coin > 50) {
        arrow1.style.display ='none'
        
        AttackButton[1].addEventListener('click', attack)

        function attack() {
            HpBar[0].value = playerOne.currenthealth -= playerTwo.totalDamage
            HitpointsP[0].innerText = playerOne.currenthealth + '/' + playerOne.maxHealth + ' ' + 'hitpoints';
            
    
            
            
        }
        


    }
    else {
        arrow2.style.display = 'none'
        AttackButton[0].addEventListener('click', attack2)
        function attack2() {
            HpBar[1].value = playerTwo.currenthealth -= playerOne.totalDamage
            HitpointsP[1].innerText = playerTwo.currenthealth + '/' + playerTwo.maxHealth + ' ' + 'hitpoints';
        }
 
    }
        

}


