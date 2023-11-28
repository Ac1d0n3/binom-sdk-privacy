import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvcDemoComponent } from './svc-demo.component';

describe('SvcDemoComponent', () => {
  let component: SvcDemoComponent;
  let fixture: ComponentFixture<SvcDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvcDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvcDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
