import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {environment} from '../environments/environment'

@Injectable({
    providedIn: 'root'
  })
export class ApiService {
    constructor(private http:HttpClient)
    {

    }

    httpOptions = {
        headers : new HttpHeaders({
          'Content-Type' : 'application/json'
        }),
        observe : "response" as 'body'
      }


      get(path : string, params: HttpParams = new HttpParams()):Observable<any>{
        return this.http.get(`${environment.api_url}${path}`,{params})
      }

      getAll(path : string, params: HttpParams = new HttpParams()):Observable<any[]>{
        return this.http.get<any[]>(`${environment.api_url}${path}`,{params})
      }


      post(path : string, body: Object = {}) : Observable<any>{
        return this.http.post(
            `${environment.api_url}${path}`,
            JSON.stringify(body),
            this.httpOptions
        )
      }
    


}