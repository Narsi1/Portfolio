import { Component } from '@angular/core';
import { SOCIAL } from 'src/shared/constants/social.constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  social = SOCIAL;

  openUrl(url: string): void {
    window.open(url, 'blank');
  }
}
