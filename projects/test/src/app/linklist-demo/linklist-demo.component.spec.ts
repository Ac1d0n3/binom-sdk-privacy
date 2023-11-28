import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinklistDemoComponent } from './linklist-demo.component';

describe('LinklistDemoComponent', () => {
  let component: LinklistDemoComponent;
  let fixture: ComponentFixture<LinklistDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinklistDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinklistDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
