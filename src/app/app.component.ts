import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { JobfairComponentComponent } from './jobfair-component/jobfair-component.component';
import { SsComponentComponent } from "./ss-component/ss-component.component";
import { DayOneComponent } from "./day-one/day-one.component";
import { DayTwoComponent } from './day-two/day-two.component';
import { DayThreeComponent } from './day-three/day-three.component';
import { PinnedCarouselComponent } from "./pinned-carousel/pinned-carousel.component";
import { SponsorCardSectionComponent } from "./sponsor-card-section/sponsor-card-section.component";
import { AboutBestComponent } from "./about-best/about-best.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, JobfairComponentComponent, SsComponentComponent, DayOneComponent, DayTwoComponent, DayThreeComponent, PinnedCarouselComponent, SponsorCardSectionComponent, AboutBestComponent]
})
export class AppComponent {
  title = 'jobfair-app';
  sidebarIsOpen:boolean = false;

}
