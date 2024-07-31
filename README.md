Sistema de Combate de Personagens

Este projeto foi desenvolvido como um exercício para treinar conceitos de orientação a objetos (OO) em JavaScript. Ele simula um sistema de combate entre diferentes tipos de personagens, cada um com atributos unicos. A aplicação permite que personagens como guerreiros, magos e monstros lutem entre si, com ataques, defesas e log de combate em tempo real.

Descrição
O sistema é composto por várias classes principais:

Character
A classe base Character define os atributos e métodos comuns a todos os personagens, como vida, ataque e defesa. Métodos getter e setter são usados para gerenciar a vida dos personagens, garantindo que ela não seja negativa.

Warrior e Mage
Classes derivadas Warrior e Mage representam tipos específicos de personagens, cada um com valores iniciais distintos para vida, ataque e defesa.

LittleMonster e BigMonster
Estas classes derivadas representam monstros de diferentes forças, com atributos ajustados para criar desafios variados.

Stage
A classe Stage gerencia o combate entre dois personagens. Ela atualiza a interface do usuário com o estado atual dos personagens e define a lógica de ataque e defesa, incluindo fatores aleatórios para dano e defesa.

Log
A classe Log registra e exibe mensagens de log das ações ocorridas durante a batalha, ajudando a acompanhar os eventos em tempo real.

Como Usar
Clone o repositório.

Abra o arquivo index.html em seu navegador.

Escolha os personagens a serem usados na batalha (modifique as instâncias no script se necessário).

Inicie a luta e acompanhe o combate através dos elementos visuais e do log.



let log = new Log(document.querySelector('.log'));

let char = new Mage("João Miano");
// Pode alterar entre Warrior e Mage
let monster = new BigMonster();
// Pode alterar entre LittleMonster e BigMonster

let stage = new Stage(
     char, 
     monster, 
     document.querySelector('.hero'), 
     document.querySelector('.monster'),
     log
);

stage.start();




Funcionalidades
Sistema de combate: Personagens podem atacar e defender.

Interface interativa: Visualize a vida dos personagens e as ações de combate.

Log de combate: Acompanhe as ações e eventos do combate em tempo real.

Este projeto é um ótimo exemplo de como usar conceitos de orientação a objetos em JavaScript para criar uma aplicação interativa e funcional. Sinta-se à vontade para modificar e expandir o código para explorar ainda mais o paradigma de OO.


Créditos

Este projeto foi desenvolvido durante um curso de JavaScript,realizado pela plataforma B7WEB para treinar e reforçar os conceitos de orientação a objetos.
