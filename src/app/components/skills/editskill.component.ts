import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-editskill',
  templateUrl: './editskill.component.html',
  styleUrls: ['./editskill.component.css']
})
export class EditskillComponent implements OnInit {

  skills: Skills = null;


  constructor( private skillService: SkillsService, private activatedRouter: ActivatedRoute, private router: Router) { }
  


    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      console.log(id);
      this.skillService.detail(id).subscribe({

        next: (data) =>{
          this.skills = data;
        },error: (err) =>{
       alert("Error al modificar experiencia");
          this.router.navigate(['/']);
        }
     })
    } 



    onUpdate(): void{

      const id = this.activatedRouter.snapshot.params['id'];
      this.skillService.update(id, this.skills).subscribe({
        next: (data) =>{
          this.router.navigate(['/']);
        }, error: (err) =>{
       alert("Error al modificar la habilidad");
           this.router.navigate(['/']);
        }
    })
    }

}
