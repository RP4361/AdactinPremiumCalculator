import { Injectable } from '@angular/core';
import {OccupationMockData} from '../models/occupationmockdata';
import {Observable, of} from 'rxjs';
import { OccupationModel } from 'src/models/occupationmodel';

@Injectable({
  providedIn: 'root'
})
export class OccupationdataService {

  constructor() { }


  public GetOccupationData():Observable<OccupationModel[]>{
    return of(OccupationMockData);
  }

}
