import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { Exercicio01Module } from '../exercicio01/exercicio01.module';
import { Exercicio02Module } from '../exercicio02/exercicio02.module';
import { Exercicio03Module } from '../exercicio03/exercicio03.module';
import { Exercicio04Module } from '../exercicio04/exercicio04.module';
import { Exercicio05Module } from '../exercicio05/exercicio05.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    Exercicio01Module,
    Exercicio02Module,
    Exercicio03Module,
    Exercicio04Module,
    Exercicio05Module
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
