import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NewBookComponent } from './components/pages/new-book/new-book.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sobre', component: AboutComponent},
  {path: 'livros/novo', component: NewBookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

