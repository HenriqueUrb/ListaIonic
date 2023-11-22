import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exercicio01',
  templateUrl: './exercicio01.component.html',
  styleUrls: ['./exercicio01.component.scss'],
})
export class Exercicio01 implements OnInit {
  distancia!: number;
  litros!: number;
  resultado!: number;
  classificacao!: string;

  calcularKmPorLitro() {
    this.resultado = this.distancia / this.litros;

    if (this.resultado > 13) {
      this.classificacao = 'Econômico';
    } else if (this.resultado >= 10 && this.resultado <= 13) {
      this.classificacao = 'Normal';
    } else {
      this.classificacao = 'Gastador';
    }
  }

  constructor() {}

  ngOnInit() {}
}
