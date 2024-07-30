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