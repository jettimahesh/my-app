import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegiComponent } from './student-regi.component';

describe('StudentRegiComponent', () => {
  let component: StudentRegiComponent;
  let fixture: ComponentFixture<StudentRegiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentRegiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentRegiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
