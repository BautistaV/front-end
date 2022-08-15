import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewexperienceComponent } from './components/experience/newexperience.component';
import { EditexperienceComponent } from './components/experience/editexperience.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EditskillComponent } from './components/skills/editskill.component';
import { EditeducationComponent } from './components/education/editeducation.component';
import { EditprojectsComponent } from './components/projects/editprojects.component';
import { EditaboutComponent } from './components/about/editabout.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'newexperience', component:  NewexperienceComponent },
  { path: 'editexperience/:id', component: EditexperienceComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'editskills/:id', component: EditskillComponent },
  { path: 'editeducation/:id', component: EditeducationComponent },
  { path: 'editprojects/:id', component: EditprojectsComponent },
  { path: 'editabout/:id', component: EditaboutComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
