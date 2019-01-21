export class Member {
    constructor(id: string, name: string, programs: string[], countries: string[], 
                majors: string[], minors: string[], email: string, 
                imageUrl: string, officeHours: string, questions: string[]) {
        this.id = id;
        this.name = name;
        this.programs = programs;
        this.countries = countries;
        this.minors = minors;
        this.majors = majors;
        this.email = email;
        this.imageUrl = imageUrl;
        this.officeHours = officeHours;
        this.questions = questions;
    }
    
    id: string;
    name: string;
    programs: string[];
    countries: string[];
    majors: string[];
    minors: string[];
    email: string;
    imageUrl: string;
    officeHours: string;
    questions: string[];
}