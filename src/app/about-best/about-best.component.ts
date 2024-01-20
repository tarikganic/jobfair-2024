import { Component } from '@angular/core';
import { FaIconComponent,FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-about-best',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './about-best.component.html',
  styleUrl: './about-best.component.css'
})
export class AboutBestComponent {
  public readonly faInstagram = faInstagram;
  public readonly faFacebook = faFacebook;
  public readonly faLinkedin = faLinkedin;
}
