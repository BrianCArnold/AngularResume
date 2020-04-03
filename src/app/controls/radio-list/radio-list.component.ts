import { Component, OnInit, forwardRef, EventEmitter, Output, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-radio-list',
  templateUrl: './radio-list.component.html',
  styleUrls: ['./radio-list.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => RadioListComponent),
  }]
})
export class RadioListComponent implements OnInit, ControlValueAccessor {
  onChange: (() => void )[] = [];
  onTouched: (() => void )[] = [];
  disabled: boolean;

  private internalModel: any;
  get model(): any {
    return this.internalModel;
  }
  set model(val: any) {
    this.internalModel = val;
    this.ngModelChange.emit(this.internalModel);
  }

  @Input()
  get ngModel(): any {
    return this.model;
  }
  set ngModel(val: any) {
    this.internalModel = val;
  }

  @Input()
  get value(): any {
    return this.model;
  }


  @Output()
  ngModelChange = new EventEmitter<any>();

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
