import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobfairComponentComponent } from './jobfair-component.component';

describe('JobfairComponentComponent', () => {
  let component: JobfairComponentComponent;
  let fixture: ComponentFixture<JobfairComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobfairComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobfairComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
