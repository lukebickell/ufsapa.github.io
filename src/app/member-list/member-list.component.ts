import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../member';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  filterText : string;
  members : Member[];

  constructor(public memberService: MemberService) {  }

  ngOnInit() {
    this.getMembers();
  }

  getMembers(): void {
    this.memberService.getMembers()
      .subscribe(members => this.registerMembers(members));
  }

  // I don't understand why this is necessary but it is
  registerMembers(members : Member[]) {
    this.members = members;
  }
}
