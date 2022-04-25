import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { map, tap, toArray } from 'rxjs';

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
  constructor(private http: HttpClient){ }
  public loading = false;
  public currentPage: 'Schedule' | 'Rules' = 'Schedule'

  public rounds: Round[] = [
    {
      roundTitle: 'Round of 26',
      games: []
    },
    {
      roundTitle: 'Round of 13',
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
    this.loading = true;
    this.http.get('https://georgian-beasts-default-rtdb.firebaseio.com/tournament/first/first-round.json')
    .pipe(
      map((res: any) => {
        const keys = Object.keys(res);
        return res[keys[0]];
      })
    )
    .subscribe(res => {
      res.forEach((elem: any) => {
          this.rounds[0].games.push({
          playerOne: elem.playerOne,
          playerTwo: elem.playerTwo,
          date: elem.date,
        })
      })
      this.loading = false;
    })

    for(let i = 0; i < 7; i++){
        this.rounds[1].games.push({
          playerOne: '',
          playerTwo: '',
          date: Date.now(),

        })
    }
    this.rounds[1].games.push({
      playerOne: '',
      playerTwo: '',
      date: Date.now(),

    })

    for(let i = 0; i < 4; i++){
      this.rounds[2].games.push({
        playerOne: '',
        playerTwo: '',
        date: Date.now(),

      })
    }


    for(let i = 0; i < 2; i++){
      this.rounds[3].games.push({
        playerOne: '',
        playerTwo: '',
        date: Date.now(),
      })
    }


    for(let i = 0; i < 1; i++){
      this.rounds[4].games.push({
        playerOne: '',
        playerTwo: '',
        date: Date.now(),
      })
    }
  }
}
