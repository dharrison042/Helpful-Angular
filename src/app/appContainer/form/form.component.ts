import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgbCalendar, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: []
})
export class FormComponent implements OnInit {

  genericForm: FormGroup;
  loading = true;
  sumbitted = true;

  date = this.calendar.getToday();
  // today = this.calendar.getToday();

  constructor(
    private formBuilder: FormBuilder,
    private calendar: NgbCalendar
  ) { }

  ngOnInit() {

    // this.genericForm = this.formBuilder.group({
    //
    // });

  }



}
