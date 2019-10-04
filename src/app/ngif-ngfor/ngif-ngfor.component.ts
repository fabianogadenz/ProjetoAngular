import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-ngfor',
  templateUrl: './ngif-ngfor.component.html',
  styleUrls: ['./ngif-ngfor.component.css']
})
export class NgifNgforComponent implements OnInit {
  arrNumeros = [1, 2, 3, 4, 5];
  numero: number;
  constructor() { }

  ngOnInit() {
  }

}
