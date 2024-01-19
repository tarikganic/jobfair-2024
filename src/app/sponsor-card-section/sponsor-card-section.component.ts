import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Partners } from '../../assets/partners';
import { GoldPartners } from '../../assets/gold-partners';
import { SilverPartners } from '../../assets/silver-partners';
import { BronzePartners } from '../../assets/bronze-partners';
@Component({
  selector: 'app-sponsor-card-section',
  standalone: true,
  imports: [ CommonModule, NgFor],
  templateUrl: './sponsor-card-section.component.html',
  styleUrl: './sponsor-card-section.component.css'
})
export class SponsorCardSectionComponent implements OnInit {
  partners: Partner[] = Partners;
  Gpartners:Partner[] = GoldPartners;
  Spartners:Partner[] = SilverPartners;
  Bpartners:Partner[] = BronzePartners;
  constructor() {}

  ngOnInit(): void {


  }
}

interface Partner {
  image: string;
  title: string;
  bio: string;
}
