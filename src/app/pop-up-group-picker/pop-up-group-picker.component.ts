import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GroupCollection } from '../classes/group-collection';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-pop-up-group-picker',
  templateUrl: './pop-up-group-picker.component.html',
  styleUrls: ['./pop-up-group-picker.component.scss']
})
export class PopUpGroupPickerComponent implements OnInit {



  @Output() categoryEvent = new EventEmitter<Array<string>>();

  newCategories: Array<string>;

  categoryGroup: GroupCollection = {
    id: true,
    name: true,
    isEngage: true,
    isExpired: true,
    areWidgetsActivated: true,
    group: true,
    has_consent: true,
    paused: true,
    expireDate: true,
    scheduledRemoval: true
  }

  createGroup(arr) {
    for(var key in this.categoryGroup) {
      if(arr.includes(key)) {
        this.categoryGroup[key] = true
      }
      else {
        this.categoryGroup[key] = false
      }
    }
  }
  
  sendCategory() {
    this.categoryEvent.emit(this.newCategories)
  }

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(CategoryPopup, {
      data: {
        id: this.categoryGroup.id,
        name: this.categoryGroup.name,
        isEngage: this.categoryGroup.isEngage,
        isExpired: this.categoryGroup.isExpired,
        areWidgetsActivated: this.categoryGroup.areWidgetsActivated,
        group: this.categoryGroup.group,
        has_consent: this.categoryGroup.has_consent,
        paused: this.categoryGroup.paused,
        expireDate: this.categoryGroup.expireDate,
        scheduledRemoval: this.categoryGroup.scheduledRemoval,
      }
    }).afterClosed().subscribe(
      data => {
          if(data !== undefined) {
            this.newCategories = Object.keys(data).filter(k => data[k])
            localStorage.setItem('savedCategories', JSON.stringify(Object.keys(data).filter(k => data[k])))
            this.sendCategory()
            this.createGroup(this.newCategories)
          }
       })
  }

  ngOnInit() {
    if(localStorage.getItem('savedCategories') !== null){
      this.createGroup(JSON.parse(localStorage.getItem('savedCategories')))
    }
  }

}

@Component({
  selector: 'category-popup-template',
  templateUrl: 'category-popup-template.html',
  styleUrls: ['./pop-up-group-picker.component.scss']
})
export class CategoryPopup {

  categoryForm;

  newCategories;

  constructor(@Inject(MAT_DIALOG_DATA) public groupData: GroupCollection, private fb: FormBuilder, public dialogRef: MatDialogRef<CategoryPopup>) {}

  ngOnInit() {
    this.categoryForm = this.fb.group({
      id: [this.groupData.id],
      name: [this.groupData.name],
      isEngage: [this.groupData.isEngage],
      isExpired: [this.groupData.isExpired],
      areWidgetsActivated: [this.groupData.areWidgetsActivated],
      group: [this.groupData.group],
      has_consent: [this.groupData.has_consent],
      paused: [this.groupData.paused],
      expireDate: [this.groupData.expireDate],
      scheduledRemoval: [this.groupData.scheduledRemoval],
    })
  }

  onSubmit() {
    this.dialogRef.close(this.categoryForm.value);
  }

}