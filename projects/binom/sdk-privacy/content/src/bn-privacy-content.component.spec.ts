import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnPrivacyContentComponent } from './bn-privacy-content.component';

describe('BnPrivacyContentComponent', () => {
  let component: BnPrivacyContentComponent;
  let fixture: ComponentFixture<BnPrivacyContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnPrivacyContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnPrivacyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
