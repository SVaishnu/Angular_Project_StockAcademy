import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioLessonComponent } from './audio-lesson.component';

describe('AudioLessonComponent', () => {
  let component: AudioLessonComponent;
  let fixture: ComponentFixture<AudioLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioLessonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
