import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyTypes } from 'src/app/shared/interfaces/cards.interface';
import { NoteHTTPDbService } from 'src/app/shared/services/note-http-db.service';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {

  constructor(private fb: FormBuilder, private noteHTTPDbService: NoteHTTPDbService, private activatedRoute: ActivatedRoute, private router: Router) { }
  id:number;
  types: MyTypes[] = [];
  type:MyTypes;
  typeForm: FormGroup;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.id = param.id ? +param.id : null;
      this.getType();
    });

  }
  

  async addType() {
    if(this.id){
      const type: MyTypes = this.typeForm.value;
      try {
        await this.noteHTTPDbService.editType(this.id,type);
        this.router.navigate(['cards/types']);
      } catch (error) {
        console.log(error);
        return;
      }
    }
    else{
      const type = this.typeForm.value;
      try {
        await this.noteHTTPDbService.postType(type);
        this.router.navigate(['cards/types']);
      } catch (err) {
        console.error(err);
      }
    }
  }

  async getType(){
    const typeControls = {
      name: [null, [Validators.required, Validators.maxLength(100)]],
    };
    this.typeForm = this.fb.group(typeControls);

    if (this.id) {
      try {
        this.type = await this.noteHTTPDbService.getType(this.id);
      } catch (error) {
        console.log(error);
        return;
      }
      this.typeForm.patchValue(this.type);
    } else {
      this.typeForm.reset();
    }
  }
}
