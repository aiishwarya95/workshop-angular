import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'http://ec2-18-195-118-173.eu-central-1.compute.amazonaws.com:8081'; 
  //url = 'http://localhost:8080';
  
  constructor(private http: HttpClient) { }

  getData(){ 
    return this.http.get(`${this.url}/stamboom`);
  }
}
