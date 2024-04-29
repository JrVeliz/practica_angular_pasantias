import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PersonaListServices {

  constructor(
    private http: HttpClient,
  ) { }

  getAllUser(){
    return this.http.get("http://localhost:8000/api/personas");
  }
}
