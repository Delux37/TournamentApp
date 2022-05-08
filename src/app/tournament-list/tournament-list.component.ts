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
      roundTitle: 'Grand Final',
      games: []
    }
  ]

  confettiRain() {
    for(let i=0; i<100; i++) {
      // Random rotation
      var randomRotation = Math.floor(Math.random() * 360);
        // Random Scale
      var randomScale = Math.random() * 1;
      // Random width & height between 0 and viewport
      var randomWidth = Math.floor(Math.random() * Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
      var randomHeight =  Math.floor(Math.random() * Math.max(document.documentElement.clientHeight, window.innerHeight || 500));
      
      // Random animation-delay
      var randomAnimationDelay = Math.floor(Math.random() * 15);
      console.log(randomAnimationDelay);
    
      // Random colors
      var colors = ['#0CD977', '#FF1C1C', '#FF93DE', '#5767ED', '#FFC61C', '#8497B0']
      var randomColor = colors[Math.floor(Math.random() * colors.length)];
    
      // Create confetti piece
      var confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.top=randomHeight + 'px';
      confetti.style.right=randomWidth + 'px';
      confetti.style.backgroundColor=randomColor;
      // confetti.style.transform='scale(' + randomScale + ')';
      // confetti.style.obacity=randomScale!;
            // confetti.style.opacity=randomScale!;

      confetti.style.transform='skew(15deg) rotate(' + randomRotation + 'deg)';
      confetti.style.animationDelay=randomAnimationDelay + 's';
      document.getElementById("confetti-wrapper")?.appendChild(confetti);
    }
  }

  ngOnInit(){
    this.confettiRain()
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
