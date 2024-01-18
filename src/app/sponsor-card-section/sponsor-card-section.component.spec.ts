import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorCardSectionComponent } from './sponsor-card-section.component';

describe('SponsorCardSectionComponent', () => {
  let component: SponsorCardSectionComponent;
  let fixture: ComponentFixture<SponsorCardSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SponsorCardSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SponsorCardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
