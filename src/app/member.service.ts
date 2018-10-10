import { Injectable } from '@angular/core';
import { Member } from './member';
import * as GetSheetDone from 'get-sheet-done';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  results: any;
  constructor() {
    this.results = [];
   }

  getMembers() {
    let promise = new Promise((resolve, reject) => {
      GetSheetDone.labeledCols("1XaZkNGf_v1n9hd1L2lyVaY60dcSnr2eCxgiIDd07vPc")
      .then(
        res => {
        this.results = this.parseMemberData(res.data);
        console.log(res);
        console.log(res.data);
        resolve();
        },
        msg => {
          reject(msg);
        }
      );
    });
    return Promise;
  }

  parseMemberData(memberData) {
    let members = new Array();
    memberData.forEach(member => {
      let programs = member.programs.split(';');
      let countries = member.countries.split(';');
      let majors = member.majors.split(';');
      let minors = member.minors.split(';');
      if (minors[0] === "") {
        minors = [];
      }
      let parsedMember = new Member(member.fullname, programs, countries, majors, minors, member.email, member.image);
      members.push(parsedMember);
    });
    return members;
  }
}
