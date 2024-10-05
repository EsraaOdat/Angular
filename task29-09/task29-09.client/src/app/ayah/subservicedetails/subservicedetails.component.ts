import { Component } from '@angular/core';
import { UrlService } from '../esraaURL/url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subservicedetails',
  templateUrl: './subservicedetails.component.html',
  styleUrl: './subservicedetails.component.css'
})
export class SubservicedetailsComponent {
  parameter: any
  servicesDetailsArray: any
  ngOnInit() {
    this.parameter = this._route.snapshot.paramMap.get("id");
    this.getServicesDetails(this.parameter);
  }
  getServicesDetailsbyURL: any
  constructor(private _ser: UrlService, private _route: ActivatedRoute) { }
  getServicesDetails(id: any) {
    this._ser.getSubServiceDetails(id).subscribe((data) => {
      this.getServicesDetailsbyURL = data
      console.log("this.getServicesDetailsbyURL", this.getServicesDetailsbyURL)
    })
  }
}
