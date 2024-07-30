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
import { Router } from '@angular/router';


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
  private router = inject(Router) // para navegar entre rutas
  loginForm!: FormGroup;
  registerForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
      password: ['',[Validators.required, Validators.minLength(4)]],
    });
  }


  async submit() {
    const hashPwd = await this.loginService.sha256(this.loginForm.controls['password'].value);
    const user: User = {
      UserEmail: this.loginForm.controls['email'].value,
      Pwd: hashPwd,
    };

    if (this.loginForm.valid) {
      this.loginService.login(user).then(result => {
        this.localStorageService.setItem('token', result.AccessToken)
        this.localStorageService.setItem('isAdmin', result.Role)

        if(result.Role === "Admin"){
          this.router.navigate(['admin']) //faltaria decidir en qué ruta redirige
        } else {
          this.router.navigate(['user']) //faltaria decidir en qué ruta redirige
        }
      })
    };
  }
};
