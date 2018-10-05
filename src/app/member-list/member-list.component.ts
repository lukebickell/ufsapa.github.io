import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  filterText : string;
  constructor(public memberService: MemberService) {  }

  ngOnInit() {
    this.getMembers();
  }

  getMembers(): void {
    this.memberService.getMembers();
  }

}
