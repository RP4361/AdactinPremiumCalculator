import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { OccupationModel } from 'src/models/occupationmodel';
import {OccupationdataService} from '../../../services/occupationdata.service';
import { Options, ChangeContext, PointerType } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-userpremium',
  templateUrl: './userpremium.component.html',
  styleUrls: ['./userpremium.component.css']
})
export class UserpremiumComponent implements OnInit {


// Fields
occupationData : OccupationModel[] = [];
premiumCalcFormGroup : FormGroup;
enteredName : string;
deducedAge : string;
showAgeText : boolean = false;
factorOnSelection:number;
value: number = 10000;
  options: Options = {
    floor: 10000,
    ceil: 10000000
  };
  deathCoverageAmount: number = 10000;
  finalPremium : string = '';
  disableButton : boolean = true;
  showPremiumStatement : boolean = false;



 
//ctor
  constructor(private dataService : OccupationdataService, private fb:FormBuilder) { }

//hook
  ngOnInit(): void {

    this.premiumCalcFormGroup = this.fb.group({
      'name' : new FormControl(),
      'age'  : new FormControl(),
      'dob'  : new FormControl(),
      'occupation'  : ['']
  })


      this.dataService.GetOccupationData().subscribe(data=>{
        this.occupationData = data;
        console.log(this.occupationData);
      })
    }

    calculateAndSetAge(){
      let dateEntered = new Date(this.premiumCalcFormGroup.get('dob')?.value).getTime();
      //console.log('Entered-',new Date(dateEntered).getTime());
      //console.log('Today-',Date.now());
      let timeDiff = Math.abs(Date.now() - dateEntered);
      let age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
      this.deducedAge = age.toString();
      console.log('calculatedAge --',age);
      //this.premiumCalcFormGroup.get('age')?.patchValue(age);
      this.showAgeText = true;
    }


    changeOccupation(){
      let incomingOccupation : OccupationModel = this.premiumCalcFormGroup.get('occupation')?.value;
      this.factorOnSelection = incomingOccupation.factor;
      console.log(incomingOccupation);
      console.log(this.factorOnSelection);
      this.disableButton = false;
    }


    onUserChangeEnd(changeContext: ChangeContext): void {
      this.deathCoverageAmount = changeContext.value;
      console.log(this.deathCoverageAmount);
      
    }

    calculateYearlyPremium() : void{
      let age : number = this.premiumCalcFormGroup.get('age')?.value;
      this.enteredName = this.premiumCalcFormGroup.get('name')?.value;
      this.finalPremium = (((this.deathCoverageAmount*this.factorOnSelection*age)/1000)*12).toString();
      this.showPremiumStatement = true;

    }
}
