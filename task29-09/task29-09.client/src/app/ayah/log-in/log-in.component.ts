import { Component } from '@angular/core';
import { UrlService } from '../esraaURL/url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  ngOnInit() {

  }
  constructor(private _ser: UrlService, private _router: Router) {

  }



  login(data: any) {
    var form = new FormData();
    for (let key in data) {
      form.append(key, data[key])
    }
    this._ser.logInuser(form).subscribe((response: any) => {
      alert("user added sucssfully")
      debugger;
      if (response.email == "admin22@gmail.com") {
        this._router.navigate(['/DashBoard'])
      } else {
        this._router.navigate(['/service'])
      }
      
    },
      (error) => {
        alert(error.error)
      })
  }

}
