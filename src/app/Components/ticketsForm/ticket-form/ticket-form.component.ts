import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { TicketForm } from '../../../Shared/Interfaces/ticket-form';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, MatRadioModule, MatButtonModule],
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.scss'
})
export class TicketFormComponent {
  @Input() ticketsForm!: FormGroup;
  @Output() sendForm = new EventEmitter<TicketForm>();
  technicalProblem: boolean = false;

  // constructor(private fb: FormBuilder) {
  //   this.ticketsForm = this.fb.group({
  //     title: ['', Validators.required],
  //     details: ['', Validators.required],
  //   });
  // }

  onMotiveClick(value: string) {
    if (value == '2') {
      console.log("TRUE")
      this.technicalProblem = true;
      console.log(this.technicalProblem)
      
    } else {
      console.log("FALSE")
      this.technicalProblem = false;
    }

  }


  submit(){
    const ticket:TicketForm={
      title: this.ticketsForm.controls["title"].value,
      details:this.ticketsForm.controls["details"].value,
      img.this.ticketsForm.controls["imagen"].File,
      id:0
  }
  this.sendForm.emit(ticket);
  this.sendForm.router.navegator('/userConfirmation');
  }
}
