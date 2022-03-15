import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFillteredComponent } from './product-filltered.component';

describe('ProductFillteredComponent', () => {
  let component: ProductFillteredComponent;
  let fixture: ComponentFixture<ProductFillteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFillteredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFillteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
