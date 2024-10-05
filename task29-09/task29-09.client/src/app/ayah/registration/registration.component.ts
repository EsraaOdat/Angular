import { Component } from '@angular/core';
import { UrlService } from '../esraaURL/url.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  ngOnInit() {

  }
  constructor(private _ser: UrlService, private _router: Router) {

  }



  addNewUser(data: any) {
    var form = new FormData();
    for (let key in data) {
      form.append(key, data[key])
    }
    this._ser.addUser(form).subscribe(() => {
      alert("user added sucssfully")
      this._router.navigate(['/LogIn'])
    },
      (error) => {
        alert(error.error)
      })
  }
}
