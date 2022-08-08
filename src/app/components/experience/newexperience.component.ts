import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/service/experience.service';

@Component({
  selector: 'app-newexperience',
  templateUrl: './newexperience.component.html',
  styleUrls: ['./newexperience.component.css']
})
export class NewexperienceComponent implements OnInit {
  expDesc: string = '';
  expName: string = '';
  expTime: string = '';

  
  constructor(private ExpService: ExperienceService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Experience(this.expName, this.expDesc, this.expTime);
    this.ExpService.save(expe).subscribe({
      next: (data) =>{
        alert("Experiencia añadida");
        this.router.navigate(['/']);
      }, error: (err) =>{
        alert("Falló");
        this.router.navigate(['/']);
      }
  })
  }

}
