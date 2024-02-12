import { Component } from '@angular/core';
import { FaIconComponent,FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pinned-carousel',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './pinned-carousel.component.html',
  styleUrl: './pinned-carousel.component.css'
})
export class PinnedCarouselComponent {
  public readonly faLink = faLink;

}
