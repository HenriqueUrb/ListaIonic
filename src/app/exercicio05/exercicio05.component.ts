import { Component } from '@angular/core';

@Component({
  selector: 'exercicio05',
  templateUrl: './exercicio05.component.html',
  styleUrls: ['./exercicio05.component.scss'],
})
export class Exercicio05 {
  numero1!: number | null;
  numero2!: number | null;
  operacao: string = 'A';
  resultado!: string;

  calcular() {
    if (!this.verificaNumeros()) {
      alert('Números inválidos!');
      return;
    }

    this.numero1 = Number(this.numero1);
    this.numero2 = Number(this.numero2);

    switch (this.operacao) {
      case 'A':
        this.resultado = (this.numero1 + this.numero2).toString();
        break;
      case 'B':
        this.resultado = (this.numero1 - this.numero2).toString();
        break;
      case 'C':
        this.resultado = (this.numero1 * this.numero2).toString();
        break;
      case 'D':
        if ((this.numero2 != 0)) {
          this.resultado = (this.numero1 / this.numero2).toString();
        } else {
          alert('Impossível divir por zero!');
          return;
        }
        break;
      default:
        this.resultado = 'Opção inválida';
    }
  }

  limpar(){
    this.numero1 = null;
    this.numero2 = null;
    this.operacao = 'A';
    this.resultado = '';
  }

  verificaNumeros(): boolean {
    return this.numero1 !== null && this.numero2 !== null &&
         !isNaN(Number(this.numero1)) && !isNaN(Number(this.numero2));
  }
}
