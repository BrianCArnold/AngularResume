import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkswitch',
  templateUrl: './checkswitch.component.html',
  styleUrls: ['./checkswitch.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => CheckswitchComponent),
  }]
})
export class CheckswitchComponent implements OnInit, ControlValueAccessor {
  onChange: (() => void )[] = [];
  onTouched: (() => void )[] = [];
  disabled: boolean;
  onClick() {
    this.model = !this.model;
  }
  private internalModel: boolean;
  get model(): boolean {
    return this.internalModel;
  }
  set model(val: boolean) {
    if (val == null) {
      this.internalModel = false;
    }
    else {
      this.internalModel = val;
    }
    this.ngModelChange.emit(this.internalModel);
  }


  @Input()
  get ngModel(): boolean {
    return this.model;
  }
  set ngModel(val: boolean) {
    this.internalModel = val;
  }

  get value(): boolean {
    return this.model;
  }


  @Output()
  ngModelChange = new EventEmitter<boolean>();

  @Input()
  options: any[];

  ngOnInit() {
  }

  writeValue(obj: any): void {
    this.internalModel = obj;
  }

  registerOnChange(fn: () => void): void {
    this.onChange.push(fn);
  }

  fireOnChange() {
    this.onChange.forEach(fn => {
        fn();
    });
  }

  registerOnTouched(fn: any): void {
    this.onTouched.push(fn);
  }

  fireOnTouched() {
    this.onTouched.forEach(fn => {
        fn();
    });
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }


}
