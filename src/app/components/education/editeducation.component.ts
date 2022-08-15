import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-editeducation',
  templateUrl: './editeducation.component.html',
  styleUrls: ['./editeducation.component.css']
})
export class EditeducationComponent implements OnInit {

  education: Education = null;

  constructor(private EduService: EducationService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
      console.log(id);
      this.EduService.detail(id).subscribe({

        next: (data) =>{
          this.education = data;
        },error: (err) =>{
       alert("Error al modificar la educación");
          this.router.navigate(['/']);
        }
     })
  }

    onUpdate(): void{

      const id = this.activatedRouter.snapshot.params['id'];
      this.EduService.update(id, this.education).subscribe({
        next: (data) =>{
          this.router.navigate(['/']);
        }, error: (err) =>{
       alert("Error al modificar experiencia");
           this.router.navigate(['/']);
        }
    })
}

}
