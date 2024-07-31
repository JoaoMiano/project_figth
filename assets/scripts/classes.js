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
    constructor(figther1,figther2, figther1El, figther2El, log ){
        this.figther1 = figther1;
        this.figther2 = figther2;
        this.figther1El = figther1El;
        this.figther2El = figther2El;
        this.log = log;
    }

    //Inicia a luta ao clicar no botão "Atacar"

    start(){
        this.uptade();

        this.figther1El.querySelector('#attack_button').addEventListener('click', () => this.doAttack(this.figther1, this.figther2));
        this.figther2El.querySelector('#attack_button').addEventListener('click', () => this.doAttack(this.figther2, this.figther1));
    }
     
    //Função que define o nome e atualiza a vida após o ataque

    uptade(){
        //Figther 1
        this.figther1El.querySelector('.name').innerHTML= `${this.figther1.name} - ${this.figther1.life.toFixed(2)} HP`;
        let pct1 = (this.figther1.life / this.figther1.maxLife) * 100;
        this.figther1El.querySelector('.life').style.width = `${pct1}%`;
        
        //Figther 2
        this.figther2El.querySelector('.name').innerHTML= `${this.figther2.name} - ${this.figther2.life.toFixed(2)} HP`;
        let pct2 = (this.figther2.life / this.figther2.maxLife) * 100;
        this.figther2El.querySelector('.life').style.width = `${pct2}%`;

    }

    doAttack(attacking, attacked){

        //Verificando se o atacante ou o atacado esta vivo

        if (attacking.life <= 0){
            this.log.addMensage("Morto não ataca!");
            return;
        }else if(attacked.life <= 0){
            this.log.addMensage("Chutando cachorro morto!")
            return;
        }

        //Definindo uma valor aleatorio para multiplicar o dano e defesa

        let factorAttack = (Math.random() * 2 ).toFixed(2);
        let factorDefese = (Math.random() * 2 ).toFixed(2);

        //Definindo o dano atual do atacante e defesa do atacado

        let actualAttack = factorAttack * attacking.attack;
        let actualDefese = factorDefese * attacked.defese;
    
        //Verifica se o atacante conseguiu causar dano e se sim atualiza a vida do atacado

        if(actualAttack > actualDefese){
            attacked.life -= actualAttack;

            this.log.addMensage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano no ${attacked.name}`)
        } else{
            this.log.addMensage(`${attacked.name} conseguiu defender`)
        }

        this.uptade();
    }
}

class Log{
    list = []

    constructor(listEl){
        this.listEl = listEl
    }

    addMensage(msg){
        this.list.push(msg);
        this.render();
    }

    render(){
        this.listEl.innerHTML = "";

        for(let i in this.list){
            this.listEl.innerHTML += `<li>${this.list[i]}</li>`
        }
    }
}