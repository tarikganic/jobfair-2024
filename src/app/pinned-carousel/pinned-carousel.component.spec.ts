import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinnedCarouselComponent } from './pinned-carousel.component';

describe('PinnedCarouselComponent', () => {
  let component: PinnedCarouselComponent;
  let fixture: ComponentFixture<PinnedCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PinnedCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PinnedCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
