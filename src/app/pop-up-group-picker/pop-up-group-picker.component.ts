import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GroupCollection } from '../classes/group-collection';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-pop-up-group-picker',
  templateUrl: './pop-up-group-picker.component.html',
  styleUrls: ['./pop-up-group-picker.component.scss']
})
export class PopUpGroupPickerComponent implements OnInit {

  @Input() parentData;

  currentCategories: Array<string>;

  @Output() categoryEvent = new EventEmitter<Array<string>>();

  newCategories: Array<string>;

  categoryGroup: GroupCollection = {
    id: null,
    name: null,
    isEngage: null,
    isExpired: null,
    areWidgetsActivated: null,
    group: null
  }

  createGroup() {
    for(var key in this.categoryGroup) {
      if(this.newCategories.includes(key)) {
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
        group: this.categoryGroup.group
      }
    }).afterClosed().subscribe(
      data => {
          this.newCategories = Object.keys(data).filter(k => data[k])
          this.sendCategory()
          this.createGroup();
       })
  }

  ngOnInit() {
    this.currentCategories = this.parentData;
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
      group: [this.groupData.group]
    })
  }

  onSubmit() {
    this.dialogRef.close(this.categoryForm.value);
  }

}