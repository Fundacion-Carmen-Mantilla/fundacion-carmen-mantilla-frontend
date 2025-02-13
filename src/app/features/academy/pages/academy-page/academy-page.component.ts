import {Component} from '@angular/core';
import {InformationAcademyComponent} from '../../components/information-academy/information-academy.component';
import {FuncamAcademyComponent} from '../../components/funcam-academy/funcam-academy.component';

@Component({
  selector: 'app-academy-page',
  imports: [
    InformationAcademyComponent,
    FuncamAcademyComponent
  ],
  templateUrl: './academy-page.component.html',
  styleUrl: './academy-page.component.css'
})
export class AcademyPageComponent {

}
