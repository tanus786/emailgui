import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private baseUrl:String = "https://emailapi-production.up.railway.app"

  constructor(private http:HttpClient) { }
  sendEmail(data:any){
    return this.http.post(`${this.baseUrl}/sendmail`,data)
  }
}
