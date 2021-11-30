import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextLessonComponent } from './text-lesson.component';

describe('TextLessonComponent', () => {
  let component: TextLessonComponent;
  let fixture: ComponentFixture<TextLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextLessonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
