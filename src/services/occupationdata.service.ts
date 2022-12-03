import { Injectable } from '@angular/core';
import {OccupationMockData} from '../models/occupationmockdata';
import {Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { OccupationModel } from 'src/models/occupationmodel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ApiService} from '../services/api.service'

@Injectable({
  providedIn: 'root'
})
export class OccupationdataService {

  constructor(private apiService : ApiService ) { }


/* Older Implementation */
  // public GetOccupationData():Observable<OccupationModel[]>{
  //   return of(OccupationMockData);
  // }


/* Newer Implementation */
public GetOccupationData():Observable<OccupationModel[]>{
   return this.apiService.getAll('api/GetOccupationData');
  }
}
