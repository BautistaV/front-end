import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/service/experience.service';

@Component({
  selector: 'app-editexperience',
  templateUrl: './editexperience.component.html',
  styleUrls: ['./editexperience.component.css']
})
export class EditexperienceComponent implements OnInit {

  workexp: Experience = null;


  constructor( private ExpService: ExperienceService, private activatedRouter: ActivatedRoute, private router: Router) { }
  


    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.ExpService.detail(id).subscribe({
        next: (data) =>{
          this.workexp = data;
        },error: (err) =>{
       //   alert("Error al modificar experiencia");
          this.router.navigate(['/']);
        }
     })
    } 



    onUpdate(): void{

      const id = this.activatedRouter.snapshot.params['id'];
      this.ExpService.update(id, this.workexp).subscribe({
        next: (data) =>{
          this.router.navigate(['/']);
        }, error: (err) =>{
        //   alert("Error al modificar experiencia");
           this.router.navigate(['/']);
        }
    })
    }

}
