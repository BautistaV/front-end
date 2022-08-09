import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewexperienceComponent } from './components/experience/newexperience.component';
import { EditexperienceComponent } from './components/experience/editexperience.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'newexperience', component:  NewexperienceComponent },
  { path: 'editexperience/:id', component: EditexperienceComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
