import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListOfComponent } from './list-of/list-of.component';
import { ProfileComponent } from './profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyDashboradComponent } from './my-dashborad/my-dashborad.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatTableModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { DataService } from './data/data.service';
import { PostDialogComponent } from './post-dialog/post-dialog.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthoServiceService } from './autho-service.service';
import {HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListOfComponent,
    ProfileComponent,
    MyDashboradComponent,
    PostDialogComponent,
    LoginComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MaterialModule,
    FlexLayoutModule,
    MatTableModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [[DataService,AuthoServiceService]],
  bootstrap: [AppComponent],
  entryComponents: [
    PostDialogComponent,LoginComponent
]
})
export class AppModule { }
