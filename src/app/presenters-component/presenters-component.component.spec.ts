import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentersComponentComponent } from './presenters-component.component';

describe('PresentersComponentComponent', () => {
  let component: PresentersComponentComponent;
  let fixture: ComponentFixture<PresentersComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentersComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PresentersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
