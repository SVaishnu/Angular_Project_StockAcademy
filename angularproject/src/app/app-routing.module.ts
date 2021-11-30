import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'subject', loadChildren: () => import('./subject/subject.module').then(m => m.SubjectModule)
  },
  {
    path: 'lesson', loadChildren: () => import('./lesson/lesson.module').then(m => m.LessonModule)
  },
  {
    path: 'home', component: DashboardComponent
  },
  {
    path: 'authors', loadChildren: () => import('./authors/authors.module').then(m => m.AuthorsModule)
  },
  {
    path: 'sponsor', loadChildren: () => import('./sponsor/sponsor.module').then(m => m.SponsorModule)
  },
  {
    path: 'chapters', loadChildren: () => import('./chapters/chapters.module').then(m => m.ChaptersModule)
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
