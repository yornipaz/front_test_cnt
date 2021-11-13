import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from "rxjs/operators";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HandleError } from './handle-error';
import { HeaderFactory } from './header-factory';
import { Patient } from './interfaces/patient';
import { RequestPatient } from './interfaces/requestPatient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient){}
  getAllPatient():Observable<Array<Patient>>{
    const URL:string = environment.baseURL+'patient';
    return this.http.get<Array<Patient>>(URL,{
      headers: HeaderFactory.applicationJson(),
      
    }).pipe(catchError(HandleError.handleError));
  }
  createPatient(patient:RequestPatient):Observable<Patient>{
    const URL:string = environment.baseURL+'patient';
    return this.http.post<Patient>(URL,patient,{
      headers: HeaderFactory.applicationJson(),
    }).pipe(catchError(HandleError.handleError));
  }
}
