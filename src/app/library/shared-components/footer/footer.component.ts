import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  openLinkedin() {
    window.open('https://www.linkedin.com/in/narsi-modugu498/', 'blank');
  }
  openGithub() {
    window.open('https://github.com/Narsi1', 'blank');
  }
  openInstagram() {
    window.open('https://www.linkedin.com/in/narsi-modugu498/', 'blank');
  }
  openFacebook() {
    window.open('https://github.com/Narsi1', 'blank');
  }
}
