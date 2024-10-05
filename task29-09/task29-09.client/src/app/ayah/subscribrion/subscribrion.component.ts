import { Component } from '@angular/core';
import { UrlService } from '../esraaURL/url.service';

@Component({
  selector: 'app-subscribrion',
  templateUrl: './subscribrion.component.html',
  styleUrl: './subscribrion.component.css'
})
export class SubscribrionComponent {
  ngOnInit() {
    this.getleen()
  }

  constructor(private _ser: UrlService) {

  }

  subscriptionArry: any
  getleen() {
    this._ser.getSubscription().subscribe((data) => {
      this.subscriptionArry = data
    })

  }

  //this from swagger frombody
  data = {
    "userId": 1,
    "subscriptionId": 0,
    "subServiceId": 1
  }

  addUSerSubScription1(id: number) {
    this.data.subscriptionId = id;
    this._ser.addUSerSubScription(this.data).subscribe(() => {
      alert("User Add Successfully")
    })
  }

}
