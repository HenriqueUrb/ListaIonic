import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exercicio03',
  templateUrl: './exercicio03.component.html',
  styleUrls: ['./exercicio03.component.scss'],
})
export class Exercicio03{
  altura!: number;
  peso!: number;
  resultadoImc!: number;
  classificacao!: string;

  calcularImc() {
    this.resultadoImc = this.peso / Math.pow(this.altura, 2);
    this.definirClassificacao();
  }

  definirClassificacao() {
    if (this.resultadoImc < 16) {
      this.classificacao = 'Magreza grave';
    } else if (this.resultadoImc < 17) {
      this.classificacao = 'Magreza moderada';
    } else if (this.resultadoImc < 18.5) {
      this.classificacao = 'Magreza leve';
    } else if (this.resultadoImc < 25) {
      this.classificacao = 'Saudável';
    } else if (this.resultadoImc < 30) {
      this.classificacao = 'Sobrepeso';
    } else if (this.resultadoImc < 35) {
      this.classificacao = 'Obesidade Grau I';
    } else if (this.resultadoImc < 40) {
      this.classificacao = 'Obesidade Grau II (severa)';
    } else {
      this.classificacao = 'Obesidade Grau III (mórbida)';
    }
  }

  getClassificacaoCor(): string {
    switch (this.classificacao) {
      case 'Magreza grave':
        return 'danger';
      case 'Magreza moderada':
        return 'warning';
      case 'Magreza leve':
        return 'warning';
      case 'Saudável':
        return 'success';
      case 'Sobrepeso':
        return 'warning';
      case 'Obesidade Grau I':
        return 'danger';
      case 'Obesidade Grau II (severa)':
        return 'danger';
      case 'Obesidade Grau III (mórbida)':
        return 'danger';
      default:
        return 'medium';
    }
  }
}
