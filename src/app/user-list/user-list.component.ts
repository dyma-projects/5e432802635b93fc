import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { UserService } from "../shared/services/user.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit, OnDestroy {
  public users: string[];
  public subscription: Subscription = new Subscription();

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.subscription.add(
      this.userService.users$.subscribe((users: string[]) => {
        this.users = users;
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
