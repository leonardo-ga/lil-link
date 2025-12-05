import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkShowerComponent } from './link-shower.component';

describe('LinkShowerComponent', () => {
  let component: LinkShowerComponent;
  let fixture: ComponentFixture<LinkShowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkShowerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinkShowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
