import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { TicketForm } from '../../../Shared/Interfaces/ticket-form';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, RouterOutlet,MatRadioModule, MatButtonModule],
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.scss'
})
export class TicketFormComponent {
  ticketsForm!: FormGroup;
  @Output() sendForm = new EventEmitter<TicketForm>();
  technicalProblem: boolean = false;
  
  router = inject(Router)
  
  constructor(private fb: FormBuilder) {
    this.ticketsForm = fb.group({
      title: ['', Validators.required],
      details: ['', Validators.minLength(3)],
      img:[null],
      motive: ['', Validators.required],
    });
  }
  
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
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.ticketsForm.patchValue({
        img: file
      });
    }
  }
  submit(){
    if(this.ticketsForm.valid){
      const ticket:TicketForm={
        title: this.ticketsForm.controls["title"].value,
        details:this.ticketsForm.controls["details"].value,
        img:this.ticketsForm.controls["img"].value,
      } 
      this.router.navigate(["/userConfirmation"]);
    }
    else{
      alert('debe llenar todos los campos')
    }
    
  }
}
