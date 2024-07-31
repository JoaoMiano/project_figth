class Character {
    _life = 1;
    maxLife = 1;
    attack = 0;
    defese = 0;

    constructor(name){
        this.name = name;
    }

    get life(){
        return this._life;
    }

    set life(newLife){
        this._life = newLife < 0 ? 0 : newLife;
    }
}

class Warrior extends Character{
    constructor(name){
        super(name);
        this.life = 100;
        this.maxLife = this.life;
        this.attack = 10;
        this.defese = 8;
    }
}

class Mage extends Character{
    constructor(name){
        super(name);
        this.life = 80;
        this.maxLife = this.life;
        this.attack = 15;
        this.defese = 3;
    }
}

class LittleMonster extends Character{
    constructor(name){
        super('Little Monster');
        this.life = 40;
        this.maxLife = this.life;
        this.attack = 4;
        this.defese = 4;
    }
}

class BigMonster extends Character{
    constructor(name){
        super('Big Monster');
        this.life = 120;
        this.maxLife = this.life;
        this.attack = 16;
        this.defese = 6;
    }
}

class Stage{
    constructor(figther1,figther2, figther1El, figther2El ){
        this.figther1 = figther1;
        this.figther2 = figther2;
        this.figther1El = figther1El;
        this.figther2El = figther2El;
    }

    start(){
        this.uptade();

        this.figther1El.querySelector('#attack_button').addEventListener('click', () => this.doAttack(this.figther1, this.figther2));
        this.figther2El.querySelector('#attack_button').addEventListener('click', () => this.doAttack(this.figther2, this.figther1));
    }

    uptade(){
        //Figther 1
        this.figther1El.querySelector('.name').innerHTML= `${this.figther1.name} - ${this.figther1.life} HP`;
        let pct1 = (this.figther1.life / this.figther1.maxLife) * 100;
        this.figther1El.querySelector('.life').style.width = `${pct1}%`;
        
        //Figther 2
        this.figther2El.querySelector('.name').innerHTML= `${this.figther2.name} - ${this.figther2.life} HP`;
        let pct2 = (this.figther2.life / this.figther2.maxLife) * 100;
        this.figther2El.querySelector('.life').style.width = `${pct2}%`;

    }

    doAttack(attacking, attacked){
        console.log(`${attacking.name} está atacando ${attacked.name}`);


        this.uptade();
    }
}