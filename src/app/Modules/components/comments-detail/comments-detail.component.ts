import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiServicesService } from 'src/app/Services/api-services.service';

@Component({
  selector: 'app-comments-detail',
  templateUrl: './comments-detail.component.html',
  styleUrls: ['./comments-detail.component.scss']
})
export class CommentsDetailComponent implements OnInit {
  listComments: any[] = [];

  constructor( @Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<CommentsDetailComponent>, private service: ApiServicesService) {

  }

  ngOnInit() {
    this.service.commentsUserService(this.data).subscribe((resp: any) => {
      this.listComments = resp;
      console.log(resp);
    });
  }

}
