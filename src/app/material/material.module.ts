import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/ToolBar';

const material = [
  MatToolbarModule
]

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
