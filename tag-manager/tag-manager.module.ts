import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgZorroAntdModule } from "ng-zorro-antd";

import { DelonABCModule } from "@delon/abc";
import { DelonFormModule } from "@delon/form";

import { TagManagerComponent } from "./component";

@NgModule({
  imports: [
    NgZorroAntdModule,
    DelonABCModule,
    DelonFormModule,
    AlainThemeModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [TagManagerComponent],
  exports: [TagManagerComponent]
})
export class NgxTagManagerModule {}
