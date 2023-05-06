import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor( private formBuilder: FormBuilder,private etudiantService:EtudiantService ,private router:Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      photo: ['', Validators.required],
      codeInscrit: [''],
      tel: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      gender: ['', Validators.required],
      status: [true, Validators.required],
      role: ['1', Validators.required]

    }, {
      validator: this.passwordMatchValidator
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    console.log(this.registerForm.value);

    this.etudiantService.registerEtudiant(this.registerForm.value)
    .subscribe(
      response => {
        console.log(response);
        this.router.navigateByUrl('/');

      },
      error => {
        console.log(error);
      });
}

passwordMatchValidator(frm: FormGroup) {
  return frm.controls['password'].value === frm.controls['confirmPassword'].value ? null : {'mismatch': true};
}
}
