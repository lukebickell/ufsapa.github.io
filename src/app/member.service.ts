import { Injectable } from '@angular/core';
import { Member } from './member';
import * as GetSheetDone from 'get-sheet-done';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  loading: boolean;
  constructor() {
    this.loading = true;
   }

  getMembers(): Observable<Member[]> {
    this.loading = true;
    return from(GetSheetDone.labeledCols("1XaZkNGf_v1n9hd1L2lyVaY60dcSnr2eCxgiIDd07vPc")
      .then(
        res => {
          let results = this.parseMemberData(res.data);
          this.loading = false;
          return (results);
        },
        msg => {
          console.log(msg);
        }
      ));
  }

  getMember(id: string): Observable<Member> {
    this.loading = true;
    return from(GetSheetDone.labeledCols("1XaZkNGf_v1n9hd1L2lyVaY60dcSnr2eCxgiIDd07vPc")
      .then(
        res => {
          let results = this.parseMemberData(res.data);
          let member = results.find(member => member.id === id);
          this.loading = false;
          return (member);
        },
        msg => {
          console.log(msg);
        }
      ));
  }

  parseMemberData(memberData) {
    let members:Member[] = [];

    memberData.forEach(member => {
      let programs = member.programs.split(';');
      let countries = member.countries.split(';');
      let majors = member.majors.split(';');
      let minors = member.minors.split(';');
      if (minors[0] === "") {
        minors = [];
      }
      let questions = [member.question1, member.question2, member.question3, member.question4, member.question5];

      let parsedMember = new Member(member.id, member.fullname, programs, countries, majors, minors, 
                                    member.email, member.image, member.officehours, questions);
      members.push(parsedMember);
    });
    return members;
  }
}
