import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxMailBoxComponent } from './bx-mail-box.component';

describe('BxMailBoxComponent', () => {
  let component: BxMailBoxComponent;
  let fixture: ComponentFixture<BxMailBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BxMailBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BxMailBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
