import {Component} from '@angular/core';
import {AboutFounderComponent} from '../../components/about-founder/about-founder.component';
import {
  SocialObjectActionLinesComponent
} from '../../components/social-object-action-lines/social-object-action-lines.component';
import {MissionVisionComponent} from '../../components/mission-vision/mission-vision.component';
import {ValuesAndPoliciesComponent} from '../../components/values-and-policies/values-and-policies.component';
import {TaxOraganigramComponent} from '../../components/tax-oraganigram/tax-oraganigram.component';

@Component({
  selector: 'app-about-us',
  imports: [
    AboutFounderComponent,
    SocialObjectActionLinesComponent,
    MissionVisionComponent,
    ValuesAndPoliciesComponent,
    TaxOraganigramComponent
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
