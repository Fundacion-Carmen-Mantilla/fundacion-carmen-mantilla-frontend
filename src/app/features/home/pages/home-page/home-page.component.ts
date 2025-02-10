import {Component, OnInit} from '@angular/core';
import {HomeHeroComponent} from '../../components/home-hero/home-hero.component';
import {OurMissionHomeComponent} from '../../components/our-mission-home/our-mission-home.component';
import {PartnersHomeComponent} from '../../components/partners-home/partners-home.component';
import {LastNewsHomeComponent} from '../../components/last-news-home/last-news-home.component';
import {LastPostHomeComponent} from '../../components/last-post-home/last-post-home.component';


@Component({
  selector: 'app-home-page',
  imports: [
    HomeHeroComponent,
    OurMissionHomeComponent,
    PartnersHomeComponent,
    LastNewsHomeComponent,
    LastPostHomeComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  constructor() {


  }

  ngOnInit(): void {

  }


}
