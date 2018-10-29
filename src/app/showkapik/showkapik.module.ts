import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowkapikComponent } from './showkapik.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  declarations: [ShowkapikComponent, ToolbarComponent]
})
export class ShowkapikModule { }
