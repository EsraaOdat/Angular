import { Component } from '@angular/core';
import { UrlServiceService } from '../url-service.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrl: './subscriptions.component.css'
})
export class SubscribrionComponent {
  ngOnInit() {
    this.getleen()
  }

  constructor(private _ser: UrlServiceService) {

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
    debugger;
    this.data.subscriptionId = id;
    this._ser.addUSerSubScription(this.data).subscribe(() => {
      alert("User Add Successfully")
    })
  }

}
