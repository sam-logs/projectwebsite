import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  expanded: any;
  firstSectionData: any;
  chipList: any;
  constructor(private activatedRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {

    
    const url = this.route.url;
    console.log(url);
    console.log(url.indexOf('exp'))
    if(url.indexOf('exp') == -1){
      this.expanded = false;
    } else{
      this.expanded = true;
    }
    

    this.firstSectionData = [

      {
        imgUrl : './assets/thumbnail1.png',
        subImgUrl: "./assets/thumbnail1.png",
        title: "Oru Kal Oru Kannadi Cover Song | Tamil Covers | Yuvan Shankar Raja...",
        channelName: 'The Tape',
        views: "3.6K views",
        time: "2 years ago"
      },
      {
        imgUrl : './assets/thumbnail2.png',
        subImgUrl: "./assets/thumbnail2.png",
        title: "LumiLor - Lexus Heartbeat Car Check this out",
        channelName: 'LumiLor',
        views: "1.7M views",
        time: "2 years ago"
      },

      {
        imgUrl : './assets/thumbnail3.png',
        subImgUrl: "./assets/thumbnail3.png",
        title: "New Range Rover Sport 2022 - An Amazing Luxury SUV",
        channelName: 'Denis Lukic',
        views: "53K views",
        time: "12 days ago"
      },
      {
        imgUrl : './assets/thumbnail4.png',
        subImgUrl: "./assets/thumbnail4.png",
        title: "Dua Lipa, Coldplay, Martin Garrix & Kygo, The Chainsmokers Style - Feelin...",
        channelName: 'Deep Mood',
        views: "1.1B views",
        time: "3 years ago"
      },
      {
        imgUrl : './assets/thumbnail5.png',
        subImgUrl: "./assets/thumbnail5.png",
        title: "Sun Tzu | The Art of War",
        channelName: 'EinzelGanger',
        views: "2.6M views",
        time: "1 years ago"
      },
      {
        imgUrl : './assets/thumbnail6.png',
        subImgUrl: "./assets/thumbnail6.png",
        title: "Relax House, Chillout, Study, Travel, Happy, Music...",
        channelName: 'Green Sound',
        views: "934K views",
        time: "9 months ago"
      },

      {
        imgUrl : './assets/thumbnail7.png',
        subImgUrl: "./assets/thumbnail7.png",
        title: "Amazing Shots of CHRISTOPHER NOLAN",
        channelName: 'Green Sound',
        views: "40M views",
        time: "4 years ago"
      },
      {
        imgUrl : './assets/thumbnail8.png',
        subImgUrl: "./assets/thumbnail8.png",
        title: "Jai Bhim - Polladha Ulagathiley Video | Suriya | Sean Roldan",
        channelName: 'Sony Music',
        views: "1.7M views",
        time: "8 months ago"
      },
      {
        imgUrl : './assets/video.mp4',
        subImgUrl: "./assets/thumbnail1.png",
        title: "Interstellar Official Soundtrack | Full Album - Hans Zimmer | WaterTower",
        channelName: 'WaterTower Music',
        views: "5.1M views",
        time: "1 year ago"
      },
      {
        imgUrl : './assets/tom.png',
        subImgUrl: "./assets/tom.png",
        title: "Monolik set - Beatport x Dessert Live Stream | @Beatport Live",
        channelName: 'Beatport',
        views: "687K views",
        time: "Streamed 2 year ago"
      },
      
      
    ]

  }

  viewVideo(){

    this.route.navigate(['youtube/home'])
  }
}
