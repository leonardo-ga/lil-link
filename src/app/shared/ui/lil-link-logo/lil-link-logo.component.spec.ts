import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LilLinkLogoComponent } from './lil-link-logo.component';

describe('LilLinkLogoComponent', () => {
  let component: LilLinkLogoComponent;
  let fixture: ComponentFixture<LilLinkLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LilLinkLogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LilLinkLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
