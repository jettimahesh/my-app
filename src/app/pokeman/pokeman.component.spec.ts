import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemanComponent } from './pokeman.component';

describe('PokemanComponent', () => {
  let component: PokemanComponent;
  let fixture: ComponentFixture<PokemanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
