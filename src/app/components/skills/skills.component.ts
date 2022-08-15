import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  listaDeSkills: Skills[] = [];

  constructor(private skillsService: SkillsService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.loadSkill();
    if (this.tokenService.getToken()) {
      this.isLogged = true;

    } else {
      this.isLogged = false;

    }

  }

  loadSkill(): void {
    this.skillsService.list().subscribe(data => { this.listaDeSkills = data; 
    console.log(data);
    })

  }

 delete(id?: number){
    if(id != undefined){
      this.skillsService.delete(id).subscribe({
        next: (data) =>{
          this.loadSkill()
        }, error: (err) =>{
          alert("No se pudo borrar la habilidad");
        }
    })
    }
  }


}
