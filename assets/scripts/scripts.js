let log = new Log(document.querySelector('.log'))

let char = new Mage("João Miano");
/*
  Pode alterar entre Warrior e Mage:
*/
let monster = new BigMonster();
/*
  Pode alterar entre LittleMonster e BigMonster
*/

let stage = new Stage(
     char, 
     monster, 
     document.querySelector('.hero'), 
     document.querySelector('.monster'),
     log
    )

stage.start()
