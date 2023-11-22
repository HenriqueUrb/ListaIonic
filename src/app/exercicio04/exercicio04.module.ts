import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Exercicio04 } from './exercicio04.component';

@NgModule({
  imports: [FormsModule, CommonModule, IonicModule],
  declarations: [Exercicio04],
  exports: [Exercicio04],
})
export class Exercicio04Module {}
