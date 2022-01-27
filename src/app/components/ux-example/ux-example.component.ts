import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ux-example',
  templateUrl: './ux-example.component.html',
  styleUrls: ['./ux-example.component.scss']
})
export class UxExampleComponent implements OnInit {
  public form: FormGroup;
  public today: Date = new Date();
  public booking: number = -1;

  constructor() {
    this.form = new FormGroup({
      startDate: new FormControl(this.today),
      endDate: new FormControl(""),
      firstName: new FormControl(""),
      lastName: new FormControl(""),
      address: new FormControl(""),
      city: new FormControl(""),
      postcode: new FormControl(""),
      email: new FormControl(""),
      mobile: new FormControl(""),
      confirmation: new FormControl(false)
    })
  }

  ngOnInit(): void {}

  public dateChange(): void {
    this.booking = -1;

    if ( this.form.value.startDate && this.form.value.endDate ) {
      const differenceInTime = Math.abs(this.form.value.endDate - this.form.value.startDate);
      const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));
      this.booking = differenceInDays;
    }
  }

  public mobileChanged(mobile: string) :void {
    this.form.patchValue({ mobile });
  }

  public submit(): void {
    console.log(this.form.value)
  }

}
