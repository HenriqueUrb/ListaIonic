import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { Exercicio05 } from "./exercicio05.component";

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        IonicModule,
    ],
    declarations: [Exercicio05],
    exports: [Exercicio05],
})
export class Exercicio05Module {}