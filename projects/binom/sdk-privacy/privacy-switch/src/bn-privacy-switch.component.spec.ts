import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnPrivacySwitchComponent } from './bn-privacy-switch.component';

describe('BnPrivacySwitchComponent', () => {
  let component: BnPrivacySwitchComponent;
  let fixture: ComponentFixture<BnPrivacySwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnPrivacySwitchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnPrivacySwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
