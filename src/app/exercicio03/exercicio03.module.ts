import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Exercicio03 } from './exercicio03.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [Exercicio03],
  exports: [Exercicio03],
})
export class Exercicio03Module {}
