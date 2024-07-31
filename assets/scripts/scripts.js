let char = new Warrior("João Miano");
let monster = new LittleMonster();

let stage = new Stage( char, monster, document.querySelector('.hero'), document.querySelector('.monster'))

stage.start()
