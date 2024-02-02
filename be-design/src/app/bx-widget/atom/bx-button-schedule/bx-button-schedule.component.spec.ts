import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxButtonScheduleComponent } from './bx-button-schedule.component';

describe('BxButtonScheduleComponent', () => {
  let component: BxButtonScheduleComponent;
  let fixture: ComponentFixture<BxButtonScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BxButtonScheduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BxButtonScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
