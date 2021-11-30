import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVideolessonComponent } from './add-videolesson.component';

describe('AddVideolessonComponent', () => {
  let component: AddVideolessonComponent;
  let fixture: ComponentFixture<AddVideolessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVideolessonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVideolessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
