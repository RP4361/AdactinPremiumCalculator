import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { OccupationModel } from 'src/models/occupationmodel';
import {OccupationdataService} from '../../../services/occupationdata.service';
import { Options, ChangeContext, PointerType } from '@angular-slider/ngx-slider';
import { Router } from '@angular/router';

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
maxDate : Date = new Date();
deducedAge : number;
showAgeText : boolean = false;
factorOnSelection:number;
value: number = 5000;
  options: Options = {
    floor: 5000,
    ceil: 1000000
  };
  deathCoverageAmount: number = 5000;
  finalPremium : string = '';
  disableButton : boolean = true;
  showPremiumStatement : boolean = false;



 
//ctor
  constructor(private dataService : OccupationdataService, private fb:FormBuilder, private router: Router) { }

//hook
  ngOnInit(): void {

    this.premiumCalcFormGroup = this.fb.group({
      'name' : new FormControl('', [Validators.required]),
      'age'  : new FormControl(),
      'dob'  : new FormControl('',[Validators.required]),
      'occupation'  : new FormControl('',[Validators.required])
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
      this.deducedAge = age;
      console.log('Age after Date setting --',this.deducedAge);
      //this.premiumCalcFormGroup.get('age')?.patchValue(age);
      this.showAgeText = true;
    }


    changeOccupation(){
      let incomingOccupation : OccupationModel = this.premiumCalcFormGroup.get('occupation')?.value;
      this.factorOnSelection = incomingOccupation.factor;
      //console.log(incomingOccupation);
      //console.log(this.factorOnSelection);
      this.disableButton = false;
    }


    onUserChangeEnd(changeContext: ChangeContext): void {
      this.deathCoverageAmount = changeContext.value;
      //console.log(this.deathCoverageAmount);
      this.showPremiumStatement = false;
      
    }

    btnCalculateYearlyPremium() : void{
      let age : number = this.deducedAge;
      this.enteredName = this.premiumCalcFormGroup.get('name')?.value;
      console.log('age before calculation -', age);
      console.log('deathCoverageAmount before calculation -', this.deathCoverageAmount);
      console.log('factorOnSelection before calculation -', this.factorOnSelection);
      
      this.finalPremium = (((this.deathCoverageAmount*this.factorOnSelection*age)/1000)*12).toString();
      this.showPremiumStatement = true;

    }

    btnResetInputs():void{
      this.premiumCalcFormGroup.reset();
      this.premiumCalcFormGroup = this.fb.group({
        'name' : new FormControl('', [Validators.required]),
        'age'  : new FormControl(),
        'dob'  : new FormControl('',[Validators.required]),
        'occupation'  : new FormControl('',[Validators.required])
    });
      this.premiumCalcFormGroup.markAsPristine();
      this.premiumCalcFormGroup.markAsTouched();
      this.showPremiumStatement = false;
      this.showAgeText = false;
      this.value = 5000;

    }

    

    navigateToHome(){
      this.router.navigate(['/']);
    }

}
