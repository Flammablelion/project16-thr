import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyCards } from 'src/app/shared/interfaces/cards.interface';
import { MyTypes } from 'src/app/shared/interfaces/cards.interface';
import { NoteHTTPDbService } from 'src/app/shared/services/note-http-db.service';


@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  constructor(private fb: FormBuilder, private noteHTTPDbService: NoteHTTPDbService, private activatedRoute: ActivatedRoute, private router: Router) { }

  card: MyCards;
  types: MyTypes[] = [];
  id: number | null = null;
  cardForm: FormGroup;
  editType: boolean = false;
  typeName: string;

  getClear() {
    if(this.id)
    {
      this.getData();
    }else{
      this.cardForm.reset();
    }  
  }

  async onAddNote() {
    if (this.id) {
      const card: MyCards = this.cardForm.value;
      card.reDate = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() + ` Ред..`;
      try {
        await this.noteHTTPDbService.editNote(this.id, card);
        await this.getData();
        this.router.navigate(['/cards']);
      } catch (error) {
        console.log(error);
        return;
      }
    }
    else {
      const card = this.cardForm.value;
      try {
        card.date = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
        await this.noteHTTPDbService.postNotes(card);
        this.router.navigate(['/cards']);
      } catch (err) {
        console.error(err);
      }
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.id = param.id ? +param.id : null;
      this.getData();
      this.getTypes();
    });
  }

  async getData() {
    const controls = {
      name: [null, [Validators.required, Validators.maxLength(100)]],
      inputText: [null, [Validators.required,]],
      type: [1, [Validators.required]]
    };


    this.cardForm = this.fb.group(controls);

    if (this.id) {
      try {
        this.card = await this.noteHTTPDbService.getNote(this.id);
      } catch (error) {
        console.log(error);
        return;
      }
      this.cardForm.patchValue(this.card);
    } else {
      this.cardForm.reset();
    }
  }

  async getTypes() {
    try {
      this.types = await this.noteHTTPDbService.getTypes();
    } catch (err) {
      console.error(err);
    }
  }

}
