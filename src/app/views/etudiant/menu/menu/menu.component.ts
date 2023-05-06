import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
menus:any
  constructor( private menuService:MenuService) { }

  ngOnInit(): void {
    this.menuService.getMenus().subscribe((res)=>{
      this.menus=res.menus

      console.log(res)
    })
  }




}
