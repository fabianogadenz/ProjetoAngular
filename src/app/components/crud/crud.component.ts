import { CrudService } from 'src/app/services/crud.service';
import { Component, OnInit } from '@angular/core';
import { Images } from 'src/app/models/placeholder.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  images: any;
  erro: any;
  constructor(private crudService: CrudService) {
    this.getter();
  }

  ngOnInit() {}

  getter() {
    this.crudService.getFotos().subscribe((data: Images) => {
     this.images = data;
     console.log('o dado que recebemos', data);
     console.log('a variavel q recebemos ', this.images);
    },
    (error: any) => {
     this.erro = error;
     console.error('error', error);
    });
  }

}
