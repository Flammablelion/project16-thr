import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MyCards } from './shared/interfaces/cards.interface';
import { MyTypes } from './shared/interfaces/cards.interface';
import { NoteHTTPDbService } from './shared/services/note-http-db.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private noteHTTPDbService :NoteHTTPDbService){

  }
  title = 'project16';
  ngOnInit(){
  }
}
