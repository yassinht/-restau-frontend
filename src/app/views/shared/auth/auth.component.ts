import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EnsegnService } from 'src/app/services/ensegn.service';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { ChefService } from 'src/app/services/chef.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isEtudiantSelected = true; // default to agent login form
  loginOption = 'etudiant';

  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private etudiantService: EtudiantService,
    private chefService: ChefService,
    private ensegnService: EnsegnService,
    private adminService: AdminService
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onToggleButtonClick(isEtudiantSelected: boolean) {
    this.isEtudiantSelected = isEtudiantSelected;
    console.log(this.isEtudiantSelected);
  }

  onLoginFormSubmit() {
    if (this.loginOption === 'etudiant') {
      this.etudiantService
        .loginSEtudiant(this.loginForm.value)
        .subscribe((data) => {
          console.log(data);
          this.router.navigateByUrl('etudiant');
        });
    } else if (this.loginOption === 'enseignant') {
      this.ensegnService
        .loginSEnsegn(this.loginForm.value)
        .subscribe((data) => {
          console.log(data);
          this.router.navigateByUrl('enseignant');
        });
    } else if (this.loginOption === 'chef') {
      this.chefService.loginChef(this.loginForm.value).subscribe((data) => {
        console.log(data);
        this.router.navigateByUrl('chef');
      });
    } else if (this.loginOption === 'admin') {
      this.adminService.loginAdmin(this.loginForm.value).subscribe((data) => {
        console.log(data);
        this.router.navigateByUrl('admin');
      });
    }
  }

  ngOnInit(): void {}

  setLoginOption(option: string) {
    this.loginOption = option;
  }
}
