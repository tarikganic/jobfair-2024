import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsComponentComponent } from './ss-component.component';

describe('SsComponentComponent', () => {
  let component: SsComponentComponent;
  let fixture: ComponentFixture<SsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SsComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
