import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiServicesService } from 'src/app/Services/api-services.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss']
})
export class AlbumDetailComponent implements OnInit {
  albumInfo: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<AlbumDetailComponent>, private service: ApiServicesService) { }

  ngOnInit() {
    this.service.photosByIdService(this.data).subscribe(resp => {
      this.albumInfo = resp;
    });
  }

}
