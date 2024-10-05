import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import HttpClient
import { Observable } from 'rxjs';  // Import Observable



@Injectable(
  {
  providedIn: 'root'
})
export class UrlServiceService {
  constructor(private http: HttpClient) { }
  staticData = "https://localhost:7122/api"
  getServices(): Observable<any> {
    return this.http.get<any>(`${this.staticData}/Services/getAllServices`);

  }

  getsubServicesbyServiceId(id: any): Observable<any> {
    return this.http.get<any>(`${this.staticData}/SubServices/GetSubServicesbyServiceID/${id}`);
  }

  getSubscription(): Observable<any> {
    return this.http.get<any>(`${this.staticData}/Subscribrion`)
  }

  getSubServiceDetails(id: any): Observable<any> {

    return this.http.get<any>(`${this.staticData}/SubServices/GetSubServicesbyID/${id}`);
  }


  // the Data Will Get From the function in the service subscribtion
  addUSerSubScription(data: any): Observable<any> {
    return this.http.post<any>(`${this.staticData}/UserSubscription`, data)
  }


  addUser(data: any): Observable<any> {
    return this.http.post<any>(`${this.staticData}/User`, data)
  }

  logInuser(data: any): Observable<any> {
    return this.http.post<any>(`${this.staticData}/User/LogIn`, data)
  }

  addServiceAPI(data: any): Observable<any> {
    return this.http.post<any>(`${this.staticData}/Services`, data)
  }


  PUTService(id: any, data: any): Observable<any> {
    return this.http.put<any>(`${this.staticData}/Services/editService/${id}`, data)
  }
}
