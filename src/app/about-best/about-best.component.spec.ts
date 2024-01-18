import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBestComponent } from './about-best.component';

describe('AboutBestComponent', () => {
  let component: AboutBestComponent;
  let fixture: ComponentFixture<AboutBestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutBestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutBestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
