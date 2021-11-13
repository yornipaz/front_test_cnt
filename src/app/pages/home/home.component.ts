import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/services/interfaces/patient';
import {PatientService} from '../../services/patient.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private patientsR:Array<Patient>;
  public title:string[]=[
    ' Los pacientes Pendientes, ordenados por Prioridad',
    ' Los pacientes Pendientes, ordenados por Riesgo'
    
  ]

  constructor(private patientService:PatientService) { 
    this.patientsR=[];
    this.getAllPatient()
  

  }

  getAllPatient(){
    this.patientService.getAllPatient().subscribe((result)=>{
      this.patientsR= result.filter(p=> p.state==='Pendiente')
      
      
    })
  }
  updatePatient(event:Event){
    console.log("Update Patients")
    this.getAllPatient()
    this.orderPatientByPriority()
    this.orderPatientByRisk()
  }

  orderPatientByRisk():Array<Patient>{
    return this.patientsR.sort((a,b)=>a.risk-b.risk)
  }
  orderPatientByPriority():Array<Patient>{
    return this.patientsR.sort((a,b)=>a.age-b.age)
  }


}
