import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/service/experience.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  listaDeExperiencias: Experience[] = [];

  constructor(private ExpService: ExperienceService, private tokenService: TokenService) {

   }

  isLogged = false;

  ngOnInit(): void {
    this.loadExperience();
    if (this.tokenService.getToken()) {
      this.isLogged = true;

    } else {
      this.isLogged = false;

    }

  }

  loadExperience(): void {
    this.ExpService.list().subscribe(data => { this.listaDeExperiencias = data; 
    console.log(data);
    })

  }

 delete(id?: number){
    if(id != undefined){
      this.ExpService.delete(id).subscribe({
        next: (data) =>{
          this.loadExperience()
        }, error: (err) =>{
          alert("No se pudo borrar la experiencia");
        }
    })
    }
  }


}
