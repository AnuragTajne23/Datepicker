import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';

const moment = _rollupMoment || _moment;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'datepicker';
  date = new FormControl(moment([2017, 0, 1]));
}
