import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  listEstudiantes: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.consultarEstudiantes();
  }

  consultarEstudiantes(): void {
    this.listEstudiantes = JSON.parse(localStorage.getItem('estudiantes')!);
  }

}
