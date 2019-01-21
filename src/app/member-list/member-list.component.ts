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

  constructor(public memberService: MemberService) {   }

  ngOnInit() {
    this.getMembers();
  }

  getMembers(): void {
    this.memberService.getMembers()
      .subscribe(members => this.registerMembers(members));
  }

  // I'm not even sure if this is a callback for above but it's the only way it works with observables
  registerMembers(members : Member[]) {
    this.members = members;
  }
}
