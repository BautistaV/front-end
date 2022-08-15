import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-editabout',
  templateUrl: './editabout.component.html',
  styleUrls: ['./editabout.component.css']
})
export class EditaboutComponent implements OnInit {

  person: Person = null;

  constructor(private persService: PersonService, private activatedRouter: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
      console.log(id);
      this.persService.detail(id).subscribe({

        next: (data) =>{
          this.person = data;
        },error: (err) =>{
       alert("Error al modificar la educación");
          this.router.navigate(['/']);
        }
     })
  }

    onUpdate(): void{

      const id = this.activatedRouter.snapshot.params['id'];
      this.persService.update(id, this.person).subscribe({
        next: (data) =>{
          this.router.navigate(['/']);
        }, error: (err) =>{
       alert("Error al modificar experiencia");
           this.router.navigate(['/']);
        }
    })
}

}
