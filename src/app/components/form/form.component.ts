import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { RequestPatient } from 'src/app/services/interfaces/requestPatient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  public contacts!: FormGroup;
  submitted = false;
  fumador: boolean;
  dieta: boolean;
  optionSelected: string;
  listaRelacion: Array<string>;

  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService
  ) {
    this.buildFormContact();
    this.fumador = false;
    this.dieta = false;
    this.listaRelacion = ['', '0', '1', '2', '3', '4'];
    this.optionSelected = this.listaRelacion[0];
  }

  private buildFormContact() {
    this.contacts = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      documento: ['', Validators.required],
      edad: ['', Validators.required],
      direccion: [''],
      sex: [''],
      relacion: [''],
      peso: ['', [Validators.required, Validators.minLength(1)]],
      estatura: ['', [Validators.required, Validators.minLength(2)]],
      yf: [''],
    });
  }

  get f() {
    return this.contacts.controls;
  }

  onSubmit(event: Event) {
    this.submitted = true;
    event.preventDefault();

    if (this.contacts.valid) {
      let form = this.contacts.value;

      const patient: RequestPatient = {
        firstName: form.firstName,
        lastName: form.lastName,
        documentNumber: form.documento,
        address: form.direccion ? form.direccion : '',
        gender: form.sex ? form.sex : '',
        height: parseInt(form.estatura),
        weight: parseInt(form.peso),
        age: parseInt(form.edad),
        diet: this.dieta,
        smoker: this.fumador,
        smokerYears: parseInt(form.yf),
      };

      this.patientService.createPatient(patient).subscribe((result) => {
        console.log(result);
        this.contacts.reset();
        this.submitted = false;
      });
    }
  }
}
