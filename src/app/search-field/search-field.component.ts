import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { Account } from '../classes/account';


@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit {

  constructor() { }

  filterForm: FormGroup;


   filterValues: object = {
    id: '',
    name: '',
    isEngage: '',
    isExpired: '',
    areWidgetsActivated: '',
    groupName: ''
  }




  @Output() filterEvent = new EventEmitter<object>(); 
  

  ngOnInit() {
    
  }

  onSubmit(){
    this.filterEvent.emit(this.filterValues);
    
  }
 

}
