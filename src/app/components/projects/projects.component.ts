import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/model/projects';
import { ProjectsService } from 'src/app/service/projects.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {


  listaDeProyectos: Projects[] = [];

  constructor(private projService: ProjectsService, private tokenService: TokenService) {

   }

  isLogged = false;

  ngOnInit(): void {
    this.loadProjects();
    if (this.tokenService.getToken()) {
      this.isLogged = true;

    } else {
      this.isLogged = false;

    }

  }

  loadProjects(): void {
    this.projService.list().subscribe(data => { this.listaDeProyectos = data; 
    console.log(data);
    })

  }

 delete(id?: number){
    if(id != undefined){
      this.projService.delete(id).subscribe({
        next: (data) =>{
          this.loadProjects()
        }, error: (err) =>{
          alert("No se pudo borrar el proyecto");
        }
    })
    }
  }


}
