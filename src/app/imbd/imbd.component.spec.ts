import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImbdComponent } from './imbd.component';

describe('ImbdComponent', () => {
  let component: ImbdComponent;
  let fixture: ComponentFixture<ImbdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImbdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImbdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
