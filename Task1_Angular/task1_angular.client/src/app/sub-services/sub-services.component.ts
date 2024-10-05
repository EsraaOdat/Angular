import { Component } from '@angular/core';
import { UrlServiceService } from '../url-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subscribrion',
  templateUrl: './subscribrion.component.html',
  styleUrl: './subscribrion.component.css'
})
export class SubscribrionComponent {
 
  parameter: any
  servicesArray: any
  ngOnInit() {
    this.parameter = this._route.snapshot.paramMap.get("id");
    this.getsubServices(this.parameter);
  }
  subServiceData: any
  constructor(private _ser: UrlServiceService, private _route: ActivatedRoute) { }
  getsubServices(id: any) {
    this._ser.getsubServicesbyServiceId(id).subscribe((data) => {
      this.subServiceData = data
      console.log("this.subServiceData", this.subServiceData)
    })
  }

}
