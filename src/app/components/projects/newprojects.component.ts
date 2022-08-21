import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Projects } from 'src/app/model/projects';
import { ProjectsService } from 'src/app/service/projects.service';

@Component({
  selector: 'app-newprojects',
  templateUrl: './newprojects.component.html',
  styleUrls: ['./newprojects.component.css']
})
export class NewprojectsComponent implements OnInit {

  constructor(private projService: ProjectsService, private router: Router) { }


  projName: string = '';
  projDesc: string = '';
  projTime: string = '';
  projLink: string = '';
  projImg: string = '';

  ngOnInit(): void {
  }

  onCreate(): void {
    const edu = new Projects( this.projName, this.projDesc, this.projTime, this.projImg, this.projLink);
    this.projService.save(edu).subscribe({
      next: (data) =>{
        alert("Proyecto añadido");
        this.router.navigate(['/']);
        window.location.reload();
      }, error: (err) =>{
        alert("Falló");
        this.router.navigate(['/']);
      }
  })
  }

}
