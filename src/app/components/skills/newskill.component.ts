import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-newskill',
  templateUrl: './newskill.component.html',
  styleUrls: ['./newskill.component.css']
})
export class NewskillComponent implements OnInit {

  constructor(private skillService: SkillsService, private router: Router) { }

  skillName: string = '';
  skillPercent: number;



  ngOnInit(): void {
  }

  onCreate(): void {
    const skill = new Skills(this.skillName, this.skillPercent);
    this.skillService.save(skill).subscribe({
      next: (data) =>{
        alert("Skill añadida");
        this.router.navigate(['/']);
        window.location.reload();
      }, error: (err) =>{
        alert("Falló");
        this.router.navigate(['/']);
      }
  })
  }
}
