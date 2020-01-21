import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormsComponent {
  model: any = {};
  alertStatus = false;
  showPopup = false;
  userDataObject;
  constructor(private router: Router) {
    this.model.firstName = "";
    this.model.lastName = "";
    this.model.phone = "";
    this.model.email = "";
  }
  onSubmit(f) {
    console.log(f)
    this.userDataObject = f;
    this.showPopup = true;
  }
  errorAlert(f) {
    if (f.form.status == "INVALID") this.alertStatus = true;
    else this.alertStatus = false;
  }
  closePopup() {
    this.showPopup = true;
    this.router.navigate(['/thank-you']);

  }
}
