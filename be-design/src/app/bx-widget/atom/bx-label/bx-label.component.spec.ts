import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxLabelComponent } from './bx-label.component';

describe('BxLabelComponent', () => {
  let component: BxLabelComponent;
  let fixture: ComponentFixture<BxLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BxLabelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BxLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
