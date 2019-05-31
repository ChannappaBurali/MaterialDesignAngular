import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { DataService } from '../data/data.service';
import { DataSource } from '@angular/cdk/table';
import {Observable} from 'rxjs/Observable';
import { Post } from '../Post';

import {PostDialogComponent} from '../post-dialog/post-dialog.component';
import {MatDialog} from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { AuthoServiceService } from '../autho-service.service';

@Component({
  selector: 'app-my-dashborad',
  templateUrl: './my-dashborad.component.html',
  styleUrls: ['./my-dashborad.component.css']
})
export class MyDashboradComponent {
  /** Based on the screen size, switch from standard to one column per row */
  // cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  //   map(({ matches }) => {
  //     if (matches) {
  //       return [
  //         { title: 'Card 1', cols: 1, rows: 1 },
  //         { title: 'Card 2', cols: 1, rows: 1 },
  //         { title: 'Card 3', cols: 1, rows: 1 },
  //         { title: 'Card 4', cols: 1, rows: 1 }
  //       ];
  //     }

  //     return [
  //       { title: 'Card 1', cols: 2, rows: 1 },
  //       { title: 'Card 2', cols: 1, rows: 1 },
  //       { title: 'Card 3', cols: 1, rows: 2 },
  //       { title: 'Card 4', cols: 1, rows: 1 }
  //     ];
  //   })
  // );

  // constructor(private breakpointObserver: BreakpointObserver) {}

  constructor(private dataService: DataService, private loginService:AuthoServiceService,public dialog: MatDialog) {
  }

  displayedColumns = ['date_posted', 'title', 'category', 'delete'];
  dataSource = new PostDataSource(this.dataService);
  

  openDialog() {
    let dialogRef = this.dialog.open(PostDialogComponent, {
      width: '600px',
      data: 'Add Post'
    });
    dialogRef.componentInstance.event.subscribe((result) => {
      this.dataService.addPost(result.data);
     this.dataSource = new PostDataSource(this.dataService);
    });
}


deletePost(id) {    
  this.dataService.deletePost(id);
      this.dataSource = new PostDataSource(this.dataService);          
}
}
export class PostDataSource extends DataSource<any> {
 
  constructor(private dataService: DataService) {
    super();
  }

  connect(): Observable<Post[]> {
    return this.dataService.getData();
  }

  disconnect() {
  }
 

 
}