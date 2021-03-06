import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditModalComponent>) { }

  ngOnInit(): void {
  }
  closeModal() {
    this.dialogRef.close();
  }
}
