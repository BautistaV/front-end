import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projects } from 'src/app/model/projects';
import { ProjectsService } from 'src/app/service/projects.service';

@Component({
  selector: 'app-editprojects',
  templateUrl: './editprojects.component.html',
  styleUrls: ['./editprojects.component.css']
})
export class EditprojectsComponent implements OnInit {

  constructor(private ProjService: ProjectsService, private activatedRouter: ActivatedRoute, private router: Router) { }

  projects: Projects = null;

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
      console.log(id);
      this.ProjService.detail(id).subscribe({

        next: (data) =>{
          this.projects = data;
        },error: (err) =>{
       alert("Error al modificar la educación");
          this.router.navigate(['/']);
        }
     })
  }

    onUpdate(): void{

      const id = this.activatedRouter.snapshot.params['id'];
      this.ProjService.update(id, this.projects).subscribe({
        next: (data) =>{
          this.router.navigate(['/']);
        }, error: (err) =>{
       alert("Error al modificar experiencia");
           this.router.navigate(['/']);
        }
    })
}

}
