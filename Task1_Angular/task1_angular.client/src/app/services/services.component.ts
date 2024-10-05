import { Component } from '@angular/core';
import { UrlServiceService } from '../url-service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  ngOnInit() {

    this.getServices();
  }
  constructor(private _ser: UrlServiceService) {


  }

  servicesArray: any
  getServices() {
    this._ser.getServices().subscribe((data) => {
      this.servicesArray = data
      console.log(this.servicesArray, "this.servicesArray")
    })

  }
}
