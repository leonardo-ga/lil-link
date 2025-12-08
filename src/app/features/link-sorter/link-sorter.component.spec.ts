import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkSorterComponent } from './link-sorter.component';

describe('LinkSorterComponent', () => {
  let component: LinkSorterComponent;
  let fixture: ComponentFixture<LinkSorterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkSorterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinkSorterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
