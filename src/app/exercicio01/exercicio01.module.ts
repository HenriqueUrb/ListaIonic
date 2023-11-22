import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Exercicio01 } from './exercicio01.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [Exercicio01],
  exports: [Exercicio01],
})
export class Exercicio01Module {}
