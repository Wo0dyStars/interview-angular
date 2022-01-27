import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchCountryField, CountryISO } from "ngx-intl-tel-input";

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.scss']
})
export class PhoneNumberComponent implements OnInit {
  @Output("changed") changed: EventEmitter<string> = new EventEmitter();
  
  public SearchCountryField = SearchCountryField;
  public separateDialCode = true;
  public CountryISO = CountryISO;
  public preferredCountries: CountryISO[] = [ CountryISO.UnitedKingdom, CountryISO.Netherlands ];
  public form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      phone: new FormControl(null),
    });
  }

  ngOnInit(): void {}

  public onChanges(): void {
    this.changed.emit(this.form.value.phone.internationalNumber);
  }
}
