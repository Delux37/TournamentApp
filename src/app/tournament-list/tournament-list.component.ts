import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { map, tap, toArray } from 'rxjs';

// import Swiper core and required modules
import SwiperCore, { Pagination, Swiper } from "swiper";

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
  startSlide!: number;
  

  constructor(private http: HttpClient){}
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
    })

    this.http.get('https://georgian-beasts-default-rtdb.firebaseio.com/tournament/first/third-round.json')
    .pipe(
      map((res: any) => {
        const keys = Object.keys(res);
        return res[keys[0]];
      })
    )
    .subscribe(res => {
      res.forEach((elem: any) => {
          this.rounds[2].games.push({
          playerOne: elem.playerOne,
          playerTwo: elem.playerTwo,
          date: elem.date,
          winner: elem.winner
        })
      })
      this.loading = false;


    })

    this.http.get('https://georgian-beasts-default-rtdb.firebaseio.com/tournament/first/fourth-round.json')
    .pipe(
      map((res: any) => {
        const keys = Object.keys(res);
        return res[keys[0]];
      })
    )
    .subscribe(res => {
      res.forEach((elem: any) => {
          this.rounds[3].games.push({
          playerOne: elem.playerOne,
          playerTwo: elem.playerTwo,
          date: elem.date,
          winner: elem.winner
        })
      })
      this.loading = false;
    })

    this.http.get('https://georgian-beasts-default-rtdb.firebaseio.com/tournament/first/fifth-round.json')
    .pipe(
      map((res: any) => {
        const keys = Object.keys(res);
        return res[keys[0]];
      })
    )
    .subscribe(res => {
      res.forEach((elem: any) => {
          this.rounds[4].games.push({
          playerOne: elem.playerOne,
          playerTwo: elem.playerTwo,
          date: elem.date,
          winner: elem.winner
        })
      })
      this.loading = false;
    })

    if(this.rounds[4].games[0]?.playerOne){
      this.startSlide = 4;
    }
  }
}
