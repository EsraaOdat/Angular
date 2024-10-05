import { Component } from '@angular/core';
import { UrlService } from '../esraaURL/url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-service',
  templateUrl: './sub-service.component.html',
  styleUrl: './sub-service.component.css'
})
export class SubServiceComponent {
  parameter: any
  servicesArray: any
  ngOnInit() {
    this.parameter = this._route.snapshot.paramMap.get("id");
    this.getsubServices(this.parameter);
  }
  subServiceData: any
  constructor(private _ser: UrlService, private _route: ActivatedRoute) { }
  getsubServices(id: any) {
    this._ser.getsubServicesbyServiceId(id).subscribe((data) => {
      this.subServiceData = data
      console.log("this.subServiceData", this.subServiceData)
    })
  }

}

