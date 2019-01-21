import { Injectable } from '@angular/core';
import { Member } from './member';
import * as GetSheetDone from 'get-sheet-done';
import { PreloadAllModules } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  results: any;
  loading: boolean;
  constructor() {
    this.results = [];
    this.loading = true;
   }

  getMembers() {
    let promise = new Promise((resolve, reject) => {
      GetSheetDone.labeledCols("1XaZkNGf_v1n9hd1L2lyVaY60dcSnr2eCxgiIDd07vPc")
      .then(
        res => {
        this.results = this.parseMemberData(res.data);
        this.loading = false;
        resolve();
        },
        msg => {
          reject(msg);
        }
      );
    });
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
      let questions = [member.question1, member.question2, member.question3, member.question4, member.question5];

      let parsedMember = new Member(member.id, member.fullname, programs, countries, majors, minors, 
                                    member.email, member.image, member.officehours, questions);
      members.push(parsedMember);
    });
    return members;
  }
}
