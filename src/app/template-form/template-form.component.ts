import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
  email: string;
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.email);
  }
}
