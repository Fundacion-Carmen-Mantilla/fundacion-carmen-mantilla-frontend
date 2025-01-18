import {Component, inject, OnInit} from '@angular/core';
import {AsyncPipe, NgOptimizedImage} from '@angular/common';
import {ParametersService} from '../../../../shared/features/parameters/services/parameters.service';
import {Observable} from 'rxjs';
import {Partners} from '../../../../shared/features/parameters/models/parameters.general.settings';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-home-page',
  imports: [
    AsyncPipe,
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{
  partners$: Observable<Partners[] | null> | undefined;
  parametersService: ParametersService = inject(ParametersService);

  constructor(
  ) {
  }

  ngOnInit(): void {
    this.partners$ = this.parametersService.getGeneralSettingsParameter<Partners[]>('partners');
  }


}
