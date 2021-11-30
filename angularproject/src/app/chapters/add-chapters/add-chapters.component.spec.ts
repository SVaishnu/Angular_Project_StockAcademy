import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChaptersComponent } from './add-chapters.component';

describe('AddChaptersComponent', () => {
  let component: AddChaptersComponent;
  let fixture: ComponentFixture<AddChaptersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChaptersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChaptersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
