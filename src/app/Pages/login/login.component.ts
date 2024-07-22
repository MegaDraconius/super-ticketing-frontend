import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { AuthService } from '../../Core/auth.service';
import { User } from '../../Shared/Interfaces/user';
import { LocalStorageService } from '../../Shared/Services/local-storage.service';
import { CommonModule } from '@angular/common';
// import { User } from '../shared/interfaces/user';
// import { AuthService } from '../core/auth.service';
//import { Router } from '@angular/router';
//import { LocalStorageService } from '../shared/local-storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private localStorageService = inject(LocalStorageService);
  private loginService = inject(AuthService);
  private formBuilder = inject(FormBuilder);
  //private router = inject(Router) // para navegar entre rutas
  loginForm!: FormGroup;
  registerForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
      password: ['',[Validators.required, Validators.minLength(8)]],
    });
  }


  submit() {
    const user: User = {
      email: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value,
    };

    
    if (this.loginForm.valid) {
      console.log('form is valid');
      this.loginService.login(user).then(result => {
        this.localStorageService.setItem('token', result.accessToken)
        this.localStorageService.setItem('isAdmin', result.user.isAdmin.toString())
      })
    };
  }
};