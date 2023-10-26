import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NewBookComponent } from './components/pages/new-book/new-book.component';
import { BookComponent } from './components/pages/book/book.component';
import { EditBookComponent } from './components/pages/edit-book/edit-book.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sobre', component: AboutComponent},
  {path: 'livros/novo', component: NewBookComponent},
  {path: 'livros/:id', component: BookComponent},
  {path: 'livros/edit/:id', component: EditBookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

