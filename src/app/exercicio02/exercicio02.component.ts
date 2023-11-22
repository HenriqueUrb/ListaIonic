import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exercicio02',
  templateUrl: './exercicio02.component.html',
  styleUrls: ['./exercicio02.component.scss'],
})
export class Exercicio02 implements OnInit {
  anoNascimento!: number;
  idade!: number;
  classificacao!: string;

  calcularIdade() {
    const anoAtual = new Date().getFullYear();
    this.idade = anoAtual - this.anoNascimento;

    if (this.idade <= 12) {
      this.classificacao = 'Criança';
    } else if (this.idade >= 13 && this.idade <= 17) {
      this.classificacao = 'Adolescente';
    } else if (this.idade >= 18 && this.idade <= 59) {
      this.classificacao = 'Adulto';
    } else {
      this.classificacao = 'Idoso';
    }
  }

  limpar() {
    this.anoNascimento = 0;
    this.idade = 0;
    this.classificacao = '';
  }

  constructor() { }

  ngOnInit() {}

}
