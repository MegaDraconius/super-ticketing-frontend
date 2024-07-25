import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { TicketForm } from '../../../Shared/Interfaces/ticket-form';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { TicketServiceService } from '../../../Services/ticket-service.service';
import { Ticket } from '../../../Shared/ticket';

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    RouterOutlet,
    MatRadioModule,
    MatButtonModule,
  ],
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.scss',
})
export class TicketFormComponent {
  ticketsForm!: FormGroup;
  @Output() sendForm = new EventEmitter<TicketForm>();
  technicalProblem: boolean = false;

  router = inject(Router);

  ticketService = inject(TicketServiceService);

  constructor(private fb: FormBuilder) {
    this.ticketsForm = fb.group({
      title: ['', Validators.required],
      details: ['', Validators.minLength(3)],
      img: [null],
      motive: ['', Validators.required],
    });
  }

  onMotiveClick(value: string) {
    if (value == '2') {
      console.log('TRUE');
      this.technicalProblem = true;
      console.log(this.technicalProblem);
    } else {
      console.log('FALSE');
      this.technicalProblem = false;
    }
  }
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.ticketsForm.patchValue({
        img: file,
      });
    }
  }
  submit() {
    if (this.ticketsForm.valid) {
      // const ticket:TicketForm={
      //   title: this.ticketsForm.controls["title"].value,
      //   details:this.ticketsForm.controls["details"].value,
      //   img:this.ticketsForm.controls["img"].value,
      // }

      const ticket: Ticket = {
        TrackingId: 'ES-00000000003',
        Title: this.ticketsForm.controls['title'].value,
        Description: this.ticketsForm.controls['details'].value,
        ReportDate: '2024-07-24T07:33:18.165Z',
        // SolvedDate: '2024-07-24T07:33:18.165Z',
        Status: 'Pending',
        Country: '669a13bee4cd3cf42f7728db',
        Priority: '8',
        // Image: this.ticketsForm.controls['img'].value,
        Photo: 'photo test',
        UserId: '66a20b4c2b51e2b2d11e22d1',
      };

      console.log(ticket);
      this.ticketService.createTicket(ticket);

      this.router.navigate(['/userConfirmation']);
    } else {
      alert('debe llenar todos los campos');
    }
  }
}
