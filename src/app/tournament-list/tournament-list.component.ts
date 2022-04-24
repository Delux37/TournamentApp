import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

interface Game {
  playerOne: string;
  playerTwo: string;
  winner?: string;
  date: number;
}

interface Round {
  roundTitle: string;
  games: Game[];
}
@Component({
  selector: 'tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TournamentListComponent {
  public rounds: Round[] = [
    {
      roundTitle: 'Round of 30',
      games: []
    },
    {
      roundTitle: 'Round of 16',
      games: []
    },
    {
      roundTitle: 'Quarter final',
      games: []
    },
    {
      roundTitle: 'Semi final',
      games: []
    },
    {
      roundTitle: 'Final',
      games: []
    }
  ]

  ngOnInit(){
    for(let i = 0; i < 15; i++){
        this.rounds[0].games.push({
          playerOne: 'Player1',
          playerTwo: 'Player2',
          date: Date.now(),
          winner: Math.random() > .5 ? 'player1' : 'player2'
        })
    }
    for(let i = 0; i < 7; i++){
        this.rounds[1].games.push({
          playerOne: 'Player1',
          playerTwo: 'Player2',
          date: Date.now(),
          winner: Math.random() > .5 ? 'player1' : 'player2'

        })
    }
    this.rounds[1].games.push({
      playerOne: 'Player2',
      playerTwo: '',
      date: Date.now(),
      winner: Math.random() > .5 ? 'player1' : 'player2'

    })

    for(let i = 0; i < 4; i++){
      this.rounds[2].games.push({
        playerOne: 'Player1',
        playerTwo: 'Player2',
        date: Date.now(),
        winner: Math.random() > .5 ? 'player1' : 'player2'

      })
    }


    for(let i = 0; i < 2; i++){
      this.rounds[3].games.push({
        playerOne: 'Player1',
        playerTwo: 'Player2',
        date: Date.now(),
        winner: Math.random() > .5 ? 'player1' : 'player2'
      })
    }


    for(let i = 0; i < 1; i++){
      this.rounds[4].games.push({
        playerOne: 'Player1',
        playerTwo: 'Player2',
        date: Date.now(),
        winner: Math.random() > .5 ? 'player1' : 'player2'
      })
    }
  }
}
