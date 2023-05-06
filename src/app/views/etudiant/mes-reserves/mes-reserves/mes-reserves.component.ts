import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mes-reserves',
  templateUrl: './mes-reserves.component.html',
  styleUrls: ['./mes-reserves.component.css']
})
export class MesReservesComponent implements OnInit {
  reservations:any
  menus:any
  constructor() { }

  ngOnInit(): void {
  }

}
