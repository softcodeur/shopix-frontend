import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  clients: User[] = [];
  constructor(private userServive: UserService) {}

  ngOnInit(): void {
    this.userServive.getAllUsers().subscribe((data) => {
      if (data) {
        this.clients = data as User[];
      }
    });
  }
  // the end of ngOnInit
  toggler(client: User) {
    if (client.active) {
      console.log(client.active);
      this.userServive.changeStatus(client.id, false).subscribe((data) => {});
    } else {
      console.log(client.active);
      this.userServive.changeStatus(client.id, true).subscribe((data) => {});
    }
  }
}
