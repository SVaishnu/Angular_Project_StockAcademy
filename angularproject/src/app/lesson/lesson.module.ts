import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonRoutingModule } from './lesson-routing.module';
import { LessonTypeComponent } from './lesson-type/lesson-type.component';
import { AudioLessonComponent } from './audio-lesson/audio-lesson.component';
import { VideoLessonComponent } from './video-lesson/video-lesson.component';
import { TextLessonComponent } from './text-lesson/text-lesson.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddVideolessonComponent } from './add-videolesson/add-videolesson.component';
import { AddTextlessonComponent } from './add-textlesson/add-textlesson.component';
import { AddAudiolessonComponent } from './add-audiolesson/add-audiolesson.component';


@NgModule({
  declarations: [
    LessonTypeComponent,
    AudioLessonComponent,
    VideoLessonComponent,
    TextLessonComponent,
    AddVideolessonComponent,
    AddTextlessonComponent,
    AddAudiolessonComponent
  ],
  imports: [
    CommonModule,
    LessonRoutingModule,
    ReactiveFormsModule
  ]
})
export class LessonModule { }
