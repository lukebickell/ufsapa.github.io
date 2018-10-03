import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
    transform(members: Member[], searchText: string): any[] {
        if(!members) return [];
        if(!searchText) return members;
        searchText = searchText.toLowerCase();

        return members.filter( member => {
            return this.memberContains(member, searchText);
        });
    }

    memberContains(member: Member, search : string) : boolean {
        let contains = false;

        if (member.name.toLowerCase().includes(search)) {
            contains = true; 
        }

        member.programs.forEach(program => {
            if (program.toLowerCase().includes(search)) {
                contains = true; 
            }
        });

        member.countries.forEach(country => {
            if (country.toLowerCase().includes(search)) {
                contains = true; 
            }
        });

        member.majors.forEach(major => {
            if (major.toLowerCase().includes(search)) {
                contains = true; 
            }
        });

        member.minors.forEach(minors => {
            if (minors.toLowerCase().includes(search)) {
                contains = true; 
            }
        });

        return contains;
    }
}