import { Component, EventEmitter, inject, Output } from '@angular/core';
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
import { TicketServiceService } from '../../../Shared/Services/ticket-service.service';
import { Ticket } from '../../../Shared/ticket';
import { LanguageButtonComponent } from '../../language-button/language-button.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    RouterOutlet,
    MatRadioModule,
    MatButtonModule,
    TranslateModule,
    LanguageButtonComponent,
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
      canWork: [null],
      recurrent: [null],
      attemptedFix: [null],
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
  onMotiveChange(event: any) {
    this.technicalProblem = event.value == '2';
    if (!this.technicalProblem) {
      this.ticketsForm.patchValue({
        canWork: null,
        recurrent: null,
        attemptedFix: null,
      });
    }
  }

  calculatePriority() {
    let priority = 0;
    const motive = this.ticketsForm.controls['motive'].value;
    const canWork = this.ticketsForm.controls['canWork'].value;
    const recurrent = this.ticketsForm.controls['recurrent'].value;

    switch (motive) {
      case '1':
        priority = 3;
        break;
      case '2':
        priority = 8;
        break;
      case '3':
        priority = 5;
        break;
    }

    if (this.technicalProblem) {
      if (recurrent === '1') {
        priority += 1;
      } else if (recurrent === '2') {
        priority -= 1;
      }

      if (canWork === '1') {
        priority -= 1;
      } else if (canWork === '2') {
        priority += 1;
      }
    }

    return priority;
  }

  submit() {
    if (this.ticketsForm.valid) {
      // const ticket:TicketForm={
      //   title: this.ticketsForm.controls["title"].value,
      //   details:this.ticketsForm.controls["details"].value,
      //   img:this.ticketsForm.controls["img"].value,
      // }
      const priority = this.calculatePriority();

      //const currentDate = Date.now().toString();

      const ticket: Ticket = {
        TrackingId: 'ES-00000000003',
        Title: this.ticketsForm.controls['title'].value,
        Description: this.ticketsForm.controls['details'].value,
        ReportDate: '2024-07-29T07:33:18.165Z',
        Status: 'Pendiente',
        Country: '669a13bee4cd3cf42f7728db',
        Priority: priority.toString(),

        // Photo:this.ticketsForm.controls['img'].value,
        Photo: 'Future photo',
        UserId: '66a20b4c2b51e2b2d11e22d1',
      };

      console.log(ticket);
      this.ticketService.createTicket(ticket);

      this.ticketService.getTickets().subscribe((result) => {
        if (result.length > 0) {
          if (localStorage.getItem('role') === "Admin") {
            this.router.navigate(['/admin/confirmation']);
          }else {
            this.router.navigate(['/user/confirmation']);
          }
        }
      });
    } else {
      alert('debe llenar todos los campos');
    }
  }
}
