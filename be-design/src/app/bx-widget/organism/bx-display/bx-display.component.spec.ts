import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxDisplayComponent } from './bx-display.component';

describe('BxDisplayComponent', () => {
  let component: BxDisplayComponent;
  let fixture: ComponentFixture<BxDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BxDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BxDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
