import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserListAction } from './strore/user-list.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //userList: string[] = ["User1", "User2"];
  //userList: Observable<{ userList: string[] }> = new Observable<{ userList: string[] }>();
  userList: Observable<{ userList: string[]; }>;
  //userList: Observable<string[]>;

  constructor(private store: Store<{ usersR: { userList: string[] } }>) {
    //this.userList = this.store.select('usersR');
  }

  ngOnInit() {
    this.userList = this.store.select('usersR');
  }

  addNewUser(newusername: string) {
    //this.userList.push(newusername);
    this.store.dispatch(new UserListAction(newusername))
    //this.userList.push(newusername);
  }

}
