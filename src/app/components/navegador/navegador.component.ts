import { Component, OnInit } from '@angular/core';

declare const M:any;

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.css']
})
export class NavegadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    M.AutoInit();

  }

}
