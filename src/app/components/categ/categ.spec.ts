import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categ } from './categ';

describe('Categ', () => {
  let component: Categ;
  let fixture: ComponentFixture<Categ>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categ);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
