import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projects } from '../model/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
 // projURL ='http://localhost:8080/projects/'

  projURL ='https://backendportfoliobautista.herokuapp.com/projects/'

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Projects[]>{
    return this.httpClient.get<Projects[]>(this.projURL + 'list');

  }

  public detail(id: number): Observable<Projects>{
    return this.httpClient.get<Projects>(this.projURL + `detail/${id}`);
    
  }

  public save(projects: Projects): Observable<any>{
    return this.httpClient.post<any>(this.projURL + 'create', projects);

  }

  public update(id: number, projects: Projects): Observable<any>{
    return this.httpClient.put<any>(this.projURL + `update/${id}`, projects);

  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.projURL + `delete/${id}`);

  }

}
