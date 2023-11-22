import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Exercicio02 } from './exercicio02.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [Exercicio02],
  exports: [Exercicio02],
})
export class Exercicio02Module {}
