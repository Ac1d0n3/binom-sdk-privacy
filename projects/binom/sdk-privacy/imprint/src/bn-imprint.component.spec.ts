import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnImprintComponent } from './bn-imprint.component';

describe('BnImprintComponent', () => {
  let component: BnImprintComponent;
  let fixture: ComponentFixture<BnImprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnImprintComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnImprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
