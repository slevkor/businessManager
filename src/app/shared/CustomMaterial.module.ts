
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule} from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule],
})
export class CustomMaterialModule { }
