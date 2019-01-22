import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MemberService } from '../member.service'

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  questionTexts: string[];
  member: Member;
  constructor(
    private route: ActivatedRoute,
    public memberService: MemberService,
    private location: Location,
    
  ) {  
    this.questionTexts = 
    ["What did you study and why?",
  "Where else have you traveled (2+ weeks)?",
  "What was one of the biggest challenges you faced while abroad?",
  "Do you have any advice for students looking to study abroad?",
  "What was an interesting experience you had while abroad?"]; 
  }

  ngOnInit(): void {
    this.getMember();
  }

  getMember(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.memberService.getMember(id)
      .subscribe(member => this.member = member);
    console.log(id);
    
  }

}
