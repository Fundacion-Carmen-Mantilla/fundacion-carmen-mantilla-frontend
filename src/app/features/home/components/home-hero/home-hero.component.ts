import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home-hero',
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './home-hero.component.html',
  styleUrl: './home-hero.component.css'
})
export class HomeHeroComponent {

}
