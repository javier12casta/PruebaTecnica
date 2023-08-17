import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServicesService } from 'src/app/Services/api-services.service';
import {MatDialog} from '@angular/material/dialog';
import { CommentsDetailComponent } from '../../components/comments-detail/comments-detail.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userInfo: any;
  listPosts: any[] = [];

  constructor(private service: ApiServicesService,  private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.searchUserByIdService(params['id']).subscribe(resp => {
        this.userInfo = resp;
        console.log(typeof(this.userInfo));
        this.service.listPostsService().subscribe((resp: any) => {
          const posts = resp;
          this.listPosts = posts.filter( (element: any) =>{ 
            return element.userId === Number(params['id'])
          });
          console.log(this.listPosts);
        });
      });
    });

  }

  openModal(userId: number){
    const dialogRef = this.dialog.open(CommentsDetailComponent, {
      width: '80%', 
      height: '80%', 
      disableClose: true,
      data : userId
    });
  }

}
