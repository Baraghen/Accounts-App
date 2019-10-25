import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup} from '@angular/forms';
import {FilterValues}  from '../classes/filterValues';
import { Account } from '../classes/account';


@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit {

  constructor() { }

  filterForm: FormGroup;


   filterValuesAcc: object = {
    id: '',
    name: '',
    isEngage: '',
    isExpired: '',
    areWidgetsActivated: '',
    groupName: ''
  }

  filterValuesInfo: object = {
    has_consent: '',
    paused: '',
    expireDate: '',
    scheduledRemoval: ''
 }

 filterValues = new FilterValues();

  @Output() filterEvent = new EventEmitter<FilterValues>(); 
  

  ngOnInit() {
    
  }

  onSubmit(){
    this.filterValues.account = this.filterValuesAcc;
    this.filterValues.info = this.filterValuesInfo;
    this.filterEvent.emit(this.filterValues);   
  }
 

}
