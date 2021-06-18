import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyTypes } from 'src/app/shared/interfaces/cards.interface';
import { NoteHTTPDbService } from 'src/app/shared/services/note-http-db.service';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent implements OnInit {

  constructor(private noteHTTPDbService: NoteHTTPDbService, private router: Router) { }

  types: MyTypes[] = [];

  ngOnInit(): void {
    this.getTypes();
  }
  linkToItem(id?: number) {
    if (id) {
      this.router.navigate([this.router.url, 'list', id]);
    } else {
      this.router.navigate([this.router.url, 'list']);
    }
  }

  async getTypes() {
    try {
      this.types = await this.noteHTTPDbService.getTypes();
    } catch (err) {
      console.error(err);
    }
  }
  async deleteType(index: number) {
    try {
      await this.noteHTTPDbService.deleteType(index);

    } catch (err) {
      console.error(err);
    }
    this.getTypes();
  }

}
