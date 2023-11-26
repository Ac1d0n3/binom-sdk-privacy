import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdkPrivacyComponent } from './sdk-privacy.component';

describe('SdkPrivacyComponent', () => {
  let component: SdkPrivacyComponent;
  let fixture: ComponentFixture<SdkPrivacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SdkPrivacyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SdkPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
