import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface FizzBuzz {
  value: string | number;
  css: string;
}

const DEFAULT_THRESHOLD: number = 20;
const MINIMUM_THRESHOLD: number = 20;
const MAXIMUM_THRESHOLD: number = 100;
const BUZZTEXT: string = "Buzz";
const FIZZTEXT: string = "Fizz";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public fizzBuzz: FizzBuzz[] = [];
  public form: FormGroup;
  public thresholdError: boolean = false;

  constructor() {
    this.form = new FormGroup({
      threshold: new FormControl(DEFAULT_THRESHOLD, [ Validators.max(MAXIMUM_THRESHOLD), Validators.min(MINIMUM_THRESHOLD) ]),
      buzz: new FormControl(5, [ Validators.min(1) ]),
      fizz: new FormControl(3, [ Validators.min(1) ])
    })
  }

  ngOnInit(): void {
    this.onChanges();
    this.fizzBuzz = this.generate(this.form.value.threshold);
  }

  public updateThreshold(delta: number): void {
    this.form.patchValue({
      threshold: this.form.value.threshold + delta
    });
  }

  public updateValue(control: string, delta: number): void {
    this.form.patchValue({
      [control]: this.form.value[control] + delta
    });
  }

  private onChanges(): void {
    this.form.valueChanges.subscribe((value: any) => {
      if ( value.threshold >= MINIMUM_THRESHOLD && value.threshold <= MAXIMUM_THRESHOLD &&
           value.fizz > 0 && value.buzz > 0 ) {
        this.fizzBuzz = this.generate(value.threshold);
      } else {
        this.thresholdError = true;
        setTimeout(() => this.thresholdError = false, 3000);
      }
    });
  }

  private isFizzBuzz(entry: number, fizz: number, buzz: number, fizzText: string, buzzText: string): FizzBuzz {
    if ( entry % buzz == 0 && entry % fizz == 0 ) return { value: fizzText + "" + buzzText, css: "fizzbuzz" };
    if ( entry % buzz == 0 ) return { value: buzzText, css: "buzz" };
    if ( entry % fizz == 0 ) return { value: fizzText, css: "fizz" };

    return { value: entry, css: "normal" };
  }

  private generate(threshold: number): FizzBuzz[] {
    const fizzBuzz: FizzBuzz[] = [];

    const { fizz, buzz } = this.form.value;
    const start: number = 1;
    const end: number = threshold;

    for ( let i: number = start; i <= end; i++ ) {
      fizzBuzz.push(this.isFizzBuzz(i, fizz, buzz, FIZZTEXT, BUZZTEXT));
    }

    return fizzBuzz;
  }
}
