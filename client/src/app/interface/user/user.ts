import { InMemoryDbService } from 'angular-in-memory-web-api';



export interface user {
    _id: string;
    name: string,
    weight: number,
    height: number,
    gender: string,
    age: number,
    dob: Date,
    bmr: number
}