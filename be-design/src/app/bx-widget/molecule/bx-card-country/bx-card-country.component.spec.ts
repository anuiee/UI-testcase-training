import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxCardCountryComponent } from './bx-card-country.component';

describe('BxCardCountryComponent', () => {
  let component: BxCardCountryComponent;
  let fixture: ComponentFixture<BxCardCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BxCardCountryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BxCardCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
