import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estudiante } from 'src/app/models/estudiante';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  
  register: FormGroup;
  promedio!: number;
  estado!: string;

  constructor(private fb: FormBuilder) {
    this.register = this.fb.group({
      identificacion: ['', Validators.required],
      nombre: ['', Validators.required],
      nota1: ['', Validators.required],
      nota2: ['', Validators.required],
      nota3: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  registrarEstudiante(): void {

    this.promedio = (this.register.value.nota1 + this.register.value.nota2 + this.register.value.nota3) / 3;

    if (this.promedio >= 3) {
      this.estado = 'Aprobado';
    } else if (this.promedio > 0 && this.promedio < 3) {
      this.estado = 'Reprobado';
    } else {
      this.estado = 'Excluido';
    }

    console.log(this.register);

    const estudiante: Estudiante = {

      identificacion: this.register.value.identificacion,
      nombre: this.register.value.nombre,
      nota1: this.register.value.nota1,
      nota2: this.register.value.nota2,
      nota3: this.register.value.nota3,
      promedio: this.promedio,
      estado: this.estado,

    };

    let listEstudiantes: Estudiante[] = [];

    if (localStorage.getItem('estudiantes') === null) {
      listEstudiantes.push(estudiante);
      localStorage.setItem('estudiantes', JSON.stringify(listEstudiantes));
      this.register.reset();
    } else {
      listEstudiantes = JSON.parse(localStorage.getItem('estudiantes')!);
      listEstudiantes.push(estudiante);
      localStorage.setItem('estudiantes', JSON.stringify(listEstudiantes));
      this.register.reset();
    }

  }
}
