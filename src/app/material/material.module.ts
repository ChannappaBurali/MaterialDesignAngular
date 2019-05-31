import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule } from '@angular/material';
import { 
  MatCardModule,
  MatButtonModule,
  MatTableModule,
} from '@angular/material';

import {
  // ... other modules ...
  MatDialogModule,
  MatInputModule,
  MatSelectModule,
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,

  MatCardModule,
    MatButtonModule,
    MatTableModule,

    MatDialogModule,
    MatInputModule,
    MatSelectModule,

  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,

    MatDialogModule,
    MatInputModule,
    MatSelectModule,

  ]
})
export class MaterialModule { }
