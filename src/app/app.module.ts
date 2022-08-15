import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationComponent } from './components/education/education.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { InterceptorService } from './service/interceptor.service';
import { NewexperienceComponent } from './components/experience/newexperience.component';
import { EditexperienceComponent } from './components/experience/editexperience.component';
import { HomeComponent } from './components/home/home.component';
import { NeweducationComponent } from './components/education/neweducation.component';
import { EditeducationComponent } from './components/education/editeducation.component';
import { EditaboutComponent } from './components/about/editabout.component';
import { NewprojectsComponent } from './components/projects/newprojects.component';
import { EditprojectsComponent } from './components/projects/editprojects.component';
import { NewskillComponent } from './components/skills/newskill.component';
import { EditskillComponent } from './components/skills/editskill.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    FooterComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    LoginComponent,
    NewexperienceComponent,
    EditexperienceComponent,
    HomeComponent,
    NeweducationComponent,
    EditeducationComponent,
    EditaboutComponent,
    NewprojectsComponent,
    EditprojectsComponent,
    NewskillComponent,
    EditskillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
  ],
  providers: [
    InterceptorService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
