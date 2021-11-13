import { Component, Input, OnInit } from '@angular/core';
import { Patient } from 'src/app/services/interfaces/patient';
import { FormBuilder, FormGroup} from '@angular/forms';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() text!: string;
  @Input() patients!:Array<Patient>;

  page = 1;
  pageSize = 4;
  collectionSize =this.patients?.length;
  countries!: Patient[];
  atender!:string;
  public fr: FormGroup;

  constructor(private fb:FormBuilder) {
    this.refreshCountries();
    this.fr=this.fb.group({
      aten:['']
    }
    )
  }
 
updateState(event:Event){




  console.log(this.fr.get('aten'))
}
  refreshCountries() {
    this.countries = this.patients?.map((country, i) => ({idPatient: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
