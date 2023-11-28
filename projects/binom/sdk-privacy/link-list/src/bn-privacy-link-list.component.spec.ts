import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnPrivacyLinkListComponent } from './bn-privacy-link-list.component';

describe('BnPrivacyLinkListComponent', () => {
  let component: BnPrivacyLinkListComponent;
  let fixture: ComponentFixture<BnPrivacyLinkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnPrivacyLinkListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnPrivacyLinkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
