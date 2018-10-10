export class Member {
    constructor(name: string, programs: string[], countries: string[], 
                majors: string[], minors: string[], email: string, 
                imageUrl: string, officeHours: string) {
        this.name = name;
        this.programs = programs;
        this.countries = countries;
        this.minors = minors;
        this.majors = majors;
        this.email = email;
        this.imageUrl = imageUrl;
        this.officeHours = officeHours;
    }
    
    name: string;
    programs: string[];
    countries: string[];
    majors: string[];
    minors: string[];
    email: string;
    imageUrl: string;
    officeHours: string;
}