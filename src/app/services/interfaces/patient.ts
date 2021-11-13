export interface Patient {
    id:number;
    idPatient?:number;
    documentNumber: string;
    firstName: string;
    lastName: string;
    age: number;
    address?: string;
    gender?:string;
    weight:number;
    height:number;
    smoker:boolean;
    smokerYears?:number;
    diet:boolean;
    weightHeight?:number,
    state:string;
    priority:number;
    risk:number;
}

