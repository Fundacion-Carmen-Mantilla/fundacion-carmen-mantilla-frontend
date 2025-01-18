import {Component, inject, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ParametersService} from '../../../../shared/features/parameters/services/parameters.service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-mission-vision',
  imports: [
    AsyncPipe
  ],
  templateUrl: './mission-vision.component.html',
  styleUrl: './mission-vision.component.css'
})
export class MissionVisionComponent implements OnInit {
  visionYear$!: Observable<number | null>
  parametersService: ParametersService = inject(ParametersService);


  ngOnInit(): void {
    this.visionYear$ = this.parametersService.getGeneralSettingsParameter<number>('vision_year');
  }

}
