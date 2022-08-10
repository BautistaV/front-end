import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/service/person.service';
import { TokenService } from 'src/app/service/token.service';
// import { persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 // person: Person = new Person("","","","","","");

 person: Person[] = [];

  constructor(public personService: PersonService, private tokenService: TokenService) { }

 /* ngOnInit(): void {
    this.personService.detail(1).subscribe(data => {this.person = data})
  }
*/


  isLogged = false;

  ngOnInit(): void {
    this.loadPerson();
    if (this.tokenService.getToken()) {
      this.isLogged = true;

    } else {
      this.isLogged = false;

    }

  }

  loadPerson(): void {
    this.personService.list().subscribe(data => { this.person = data; 
    console.log(data);
    })

  }

}

/*
export class AboutComponent implements OnInit {
  persona: persona = new persona("","","");

  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }

}
*/