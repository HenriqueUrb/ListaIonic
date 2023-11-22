import { Component } from '@angular/core';

@Component({
  selector: 'exercicio04',
  templateUrl: './exercicio04.component.html',
  styleUrls: ['./exercicio04.component.scss'],
})
export class Exercicio04 {
  item: string = '';
  listaItens: { texto: string; concluido: boolean }[] = [];

  adicionarItem() {
    if (this.item != '') {
      this.listaItens.push({ texto: this.item, concluido: false });
      this.item = '';
    }
  }

  removerItem(i: number) {
    this.listaItens.splice(i, 1);
  }

  marcarComoConcluido(i: number) {
    this.listaItens[i].concluido = !this.listaItens[i].concluido;
  }
}
