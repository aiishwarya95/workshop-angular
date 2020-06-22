import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  games = {games:[{
            title: 'Exploding kittens',
            image: 'assets/images/exploding_kittens.jpg',
            description: 'Exploding Kittens is a highly-strategic, kitty-powered version of Russian Roulette',
            type: 'boardgame'
          }, 
          {
            title: 'Unstable Unicorns',
            image: 'assets/images/unicorns.png',
            description: 'Unstable Unicorns is a strategic card game that will destroy your friendships...but in a good way.', 
            type: 'boardgame'
          },
          {
            title: '7 Wonders',
            image: 'assets/images/seven_wonders.png',
            description: '7 Wonders is a card drafting game that is played using three decks of cards featuring depictions of ancient civilizations, military conflicts, and commercial activity.',
            type: 'boardgame'
          },
          {
            title: 'Ludo',
            image: 'assets/images/ludo.png',
            description: 'Ludo is a strategy board game for two to four players, in which the players race their four tokens from start to finish according to the rolls of a single die.', 
            type: 'boardgame'
          },
          {
            title: 'Mario party',
            image: 'assets/images/mario-party.png',
            description: 'Mario Party is a party video game series featuring characters from the Mario franchise in which up to four local players or computer-controlled characters compete in a board game interspersed with minigames.', 
            type: 'consolegame'
          }, 
          {
            title: 'Lets go pikachu',
            image: 'assets/images/pikachu.png',
            description: 'Lets Go is a mashup of series favorite Pokémon Yellow and Niantics breakout hit Pokémon Go. Set in the Kanto region, home to the series original 151 pokémon, players strive to become a top trainer by challenging gym leaders and building a strong team of pokémon',
            type: 'consolegame'
          },
          {
            title: 'Red Dead Redemption',
            image: 'assets/images/red-dead-redemption.png',
            description: 'Red Dead Redemption is an epic battle for survival in a beautiful open world as John Marston struggles to bury his blood-stained past, one man at a time.',
            type: 'consolegame'
          },
          { 
            title: 'FIFA 20',
            image: 'assets/images/fifa.png',
            description: 'Sick of us yet ? FIFA 20 is out now! ',
            type: 'consolegame'
          },
          {
            title: 'Borderlands',
            image: 'assets/images/borderlands.png',
            description: 'Borderlands is a series of action role-playing first-person shooter video games in a space western science fantasy setting',
            type: 'consolegame'
          }, 
          {
            title: 'Red Dead Redemption 2',
            image: 'assets/images/RedDead.png',
            description: 'Red Dead Redemption 2 is a western-themed action-adventure video game developed and published by Rockstar Games.',
            type: 'consolegame'
          }
        ]
      }
      

  constructor() {}

}
