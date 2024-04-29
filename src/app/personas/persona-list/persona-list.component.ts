import { Component } from '@angular/core';
import { PersonaListServices } from './persona-list.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-persona-list',
  standalone: true,
  imports: [CommonModule],
  providers:[PersonaListServices],
  templateUrl: './persona-list.component.html',
  styleUrl: './persona-list.component.css'
})
export class PersonaListComponent {
  public personas: any[];
  constructor (
    private personaServices: PersonaListServices
  ){
    this.personas=[];
  }
  
  ngOnInit() {
    this.getAllUsers();
  }
  getAllUsers(){
    this.personaServices.getAllUser().subscribe(
      (res:any)=>{
        console.log("res",res);
        this.personas=res;
      },
      err=>{
        console.log("err",err);
      }
    );
  }
}
