import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/app/Services/api-services.service';
import { User } from '../../utils/user';
import { FormControl } from '@angular/forms';
import { AlbumDetailComponent } from '../../components/album-detail/album-detail.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  listUsers: User[] = [];
  listUsersAux: User[] = [];
  listPhotos: any[] = [];
  searchUser = new FormControl();
  
  constructor(private service: ApiServicesService, public dialog: MatDialog) { }

  ngOnInit() {
    this.service.listUsersService().subscribe((resp: any) => {
      this.listUsers = resp;
      this.listUsersAux = resp;
    });

    this.searchUser.valueChanges.subscribe(res => {
      if (this.searchUser && res != ''){
        this.listUsers = this.listUsersAux.filter( (element) => {
          return  element['name'].toLowerCase().includes(res.toLowerCase()) || element['id'] === Number(res);
        });
      } else {
        this.listUsers = this.listUsersAux;
      }
    });

    this.service.listPhotosService().subscribe((resp: any) => {
      this.listPhotos = resp;
    });
  }
  
  openModalPhotos(photoId: number) {
    const dialogRef = this.dialog.open(AlbumDetailComponent, {
      width: '80%', 
      height: '80%', 
      disableClose: true,
      data : photoId
    });
  }
}
