import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyCards, MyTypes } from 'src/app/shared/interfaces/cards.interface';
import { NoteHTTPDbService } from 'src/app/shared/services/note-http-db.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  constructor(private fb: FormBuilder, private noteHTTPDbService: NoteHTTPDbService,  private router: Router) { }
  card: MyCards[] = [];
  types: MyTypes[] = [];


  async onDeleteCard(id: number) {
    try {
      await this.noteHTTPDbService.deleteNotes(id);

    } catch (err) {
      console.error(err);
    }
    this.getData();
  }
  async getTypes() {
    try {
      this.types = await this.noteHTTPDbService.getTypes();
    } catch (err) {
      console.error(err);
    }
  }
  async getData() {
    try {
      this.card = await this.noteHTTPDbService.getNotes();
    } catch (err) {
      console.error(err);
    }
  }
  getTypeById(id:number){
    let index = this.types?.find(type => type.id == id);
    return index?.name;
  }

  ngOnInit(): void {
    this.getTypes();
    this.getData();
  }

  linkToItem(id?: number) {
    if (id) {
      this.router.navigate([this.router.url, 'item', id]);
    } else {
      this.router.navigate([this.router.url, 'item']);
    }
  }


}
