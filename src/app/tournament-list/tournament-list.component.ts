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
      roundTitle: 'Round of 10',
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
    // console.log(new Date('May 7, 2022 19:00:00').getTime())
    // console.log(new Date('May 7, 2022 19:15:00').getTime())
    // console.log(new Date('May 7, 2022 19:30:00').getTime())
    // console.log(new Date('May 7, 2022 19:45:00').getTime())
    // console.log(new Date('May 7, 2022 20:00:00').getTime())

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
          winner: elem.winner
        })
      })
      this.loading = false;
    })

    this.http.get('https://georgian-beasts-default-rtdb.firebaseio.com/tournament/first/second-round.json')
    .pipe(
      map((res: any) => {
        const keys = Object.keys(res);
        return res[keys[0]];
      })
    )
    .subscribe(res => {
      res.forEach((elem: any) => {
          this.rounds[1].games.push({
          playerOne: elem.playerOne,
          playerTwo: elem.playerTwo,
          date: elem.date,
          winner: elem.winner
        })
      })
      this.loading = false;

      console.log(this.rounds[0].games)
    })


    this.rounds[2]
      .games
      .push(
        {
          playerOne: '',
          playerTwo: '',
          date: new Date('May 7, 2022 21:00:00').getTime()
        }
      )

    this.rounds[2]
      .games
      .push(
        {
          playerOne: '',
          playerTwo: '',
          date: new Date('May 7, 2022 21:30:00').getTime()
        }
      )

    this.rounds[2]
      .games
      .push(
        {
          playerOne: '',
          playerTwo: '',
          date: 0
        }
      )




    this.rounds[3]
      .games
      .push(
        {
          playerOne: '',
          playerTwo: '',
          date: new Date('May 8, 2022 19:00:00').getTime()
        }
      )
    this.rounds[3]
      .games
      .push(
        {
          playerOne: '',
          playerTwo: '',
          date: 0
        }
      )


      this.rounds[4].games.push({
        playerOne: '',
        playerTwo: '',
        date: new Date('May 8, 2022 22:00:00').getTime()
      })
  }
}
