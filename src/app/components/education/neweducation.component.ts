import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-neweducation',
  templateUrl: './neweducation.component.html',
  styleUrls: ['./neweducation.component.css']
})
export class NeweducationComponent implements OnInit {

  constructor(private EduService: EducationService, private router: Router) { }

  eduDesc: string = '';
  eduName: string = '';
  eduTime: string = '';
  eduImg: string = '';

  ngOnInit(): void {
  }

  onCreate(): void {
    const edu = new Education(this.eduDesc, this.eduName, this.eduTime, this.eduImg);
    this.EduService.save(edu).subscribe({
      next: (data) =>{
        alert("Educación añadida");
        this.router.navigate(['/']);
        window.location.reload();
      }, error: (err) =>{
        alert("Falló");
        this.router.navigate(['/']);
      }
  })
  }
}
