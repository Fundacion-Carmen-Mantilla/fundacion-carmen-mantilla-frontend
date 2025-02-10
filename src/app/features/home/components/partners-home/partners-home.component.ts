import {Component, inject, OnInit} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {Observable} from 'rxjs';
import {Partners} from '../../../../shared/features/parameters/models/parameters.general.settings';
import {ParametersService} from '../../../../shared/features/parameters/services/parameters.service';

@Component({
  selector: 'app-partners-home',
  imports: [
    AsyncPipe
  ],
  templateUrl: './partners-home.component.html',
  styleUrl: './partners-home.component.css'
})
export class PartnersHomeComponent implements OnInit {
  partners$: Observable<Partners[] | null> | undefined;

  parametersService: ParametersService = inject(ParametersService);

  ngOnInit(): void {
    this.partners$ = this.parametersService.getGeneralSettingsParameter<Partners[]>('partners');
  }
}
