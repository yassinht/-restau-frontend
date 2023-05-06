import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuService } from 'src/app/services/menu.service';
@Component({
  selector: 'app-menu-chef',
  templateUrl: './menu-chef.component.html',
  styleUrls: ['./menu-chef.component.css']
})
export class MenuChefComponent implements OnInit {
  menuForm: FormGroup;
  chefs:any
  constructor(private formBuilder: FormBuilder, private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuForm = this.formBuilder.group({
      chef: ['', Validators.required],
      type: ['', Validators.required],
      platEntrer: ['', Validators.required],
      platPrincipal: ['', Validators.required],
      dessert: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const formData = new FormData();
    formData.append('chef', this.menuForm.get('chef').value);
    formData.append('type', this.menuForm.get('type').value);
    formData.append('platEntrer', this.menuForm.get('platEntrer').value);
    formData.append('platPrincipal', this.menuForm.get('platPrincipal').value);
    formData.append('dessert', this.menuForm.get('dessert').value);
    formData.append('date', this.menuForm.get('date').value);

    this.menuService.createMenu(formData).subscribe(
      (response) => {
        console.log(response);
        alert('Menu created successfully!');
        this.menuForm.reset();
      },
      (error) => {
        console.log(error);
        alert('An error occurred while creating the menu.');
      }
    );
  }
}