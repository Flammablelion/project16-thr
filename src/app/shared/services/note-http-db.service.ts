import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MyCards } from '../interfaces/cards.interface';
import { MyTypes } from '../interfaces/cards.interface';

@Injectable({
  providedIn: 'root'
})
export class NoteHTTPDbService {
  constructor(private http: HttpClient) { }
  
  getNotes(): Promise<any>{
    return this.http.get(`${environment.dbURL}/notes`).toPromise();
  }
  getNote(id:number): Promise<any>{
    return this.http.get(`${environment.dbURL}/notes`+`/${id}`).toPromise();
  }
  postNotes(data: MyCards){
    return this.http.post(`${environment.dbURL}/notes`,data).toPromise();
  }
  deleteNotes(id:number){
    return this.http.delete(`${environment.dbURL}/notes` + `/${id}`).toPromise();
  }
  editNote(id:number,data:MyCards){
    return this.http.patch(`${environment.dbURL}/notes` + `/${id}`,data).toPromise();
  }

  editType(id:number,type:MyTypes){
    return this.http.patch(`${environment.dbURL}/types` + `/${id}`,type).toPromise();
  }
  getTypes(): Promise<any>{
    return this.http.get(`${environment.dbURL}/types`).toPromise();
  }
  getType(id:number): Promise<any>{
    return this.http.get(`${environment.dbURL}/types`+`/${id}`).toPromise();
  }
  postType(data: MyTypes){
    return this.http.post(`${environment.dbURL}/types`,data).toPromise();
  }
  deleteType(id:number){
    return this.http.delete(`${environment.dbURL}/types` + `/${id}`).toPromise();
  }
}
