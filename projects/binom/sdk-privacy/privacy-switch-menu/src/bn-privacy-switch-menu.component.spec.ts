import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnPrivacySwitchMenuComponent } from './bn-privacy-switch-menu.component';

describe('BnPrivacySwitchMenuComponent', () => {
  let component: BnPrivacySwitchMenuComponent;
  let fixture: ComponentFixture<BnPrivacySwitchMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnPrivacySwitchMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnPrivacySwitchMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
