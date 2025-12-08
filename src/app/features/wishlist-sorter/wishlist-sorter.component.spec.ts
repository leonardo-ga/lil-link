import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistSorterComponent } from './wishlist-sorter.component';

describe('WishlistSorterComponent', () => {
  let component: WishlistSorterComponent;
  let fixture: ComponentFixture<WishlistSorterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishlistSorterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WishlistSorterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
