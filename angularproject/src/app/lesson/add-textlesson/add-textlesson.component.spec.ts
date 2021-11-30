import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTextlessonComponent } from './add-textlesson.component';

describe('AddTextlessonComponent', () => {
  let component: AddTextlessonComponent;
  let fixture: ComponentFixture<AddTextlessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTextlessonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTextlessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
