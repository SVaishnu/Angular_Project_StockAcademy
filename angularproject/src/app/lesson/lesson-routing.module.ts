import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonTypeComponent } from './lesson-type/lesson-type.component';
import { AudioLessonComponent } from './audio-lesson/audio-lesson.component';
import { VideoLessonComponent } from './video-lesson/video-lesson.component';
import { TextLessonComponent } from './text-lesson/text-lesson.component';
import { AddVideolessonComponent } from './add-videolesson/add-videolesson.component';
import { AddTextlessonComponent } from './add-textlesson/add-textlesson.component';
import { AddAudiolessonComponent } from './add-audiolesson/add-audiolesson.component';

const routes: Routes = [
  {
    path: 'videolesson', component: VideoLessonComponent
  },
  {
    path: 'Addvideolesson', component: AddVideolessonComponent
  },
  {
    path: 'lessontype', component: LessonTypeComponent
  },
  {
    path: 'audiolesson', component: AudioLessonComponent
  },
  {
    path: 'textlesson', component: TextLessonComponent
  },
  {
    path: 'Addtextlesson', component: AddTextlessonComponent
  },
  {
    path: 'Addaudiolesson', component: AddAudiolessonComponent
  },
  {
    path: 'textlessonupdate/:id', component: AddTextlessonComponent
  },
  {
    path: 'videolessonupdate/:id', component: AddVideolessonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonRoutingModule { }
