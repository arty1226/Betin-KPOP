import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { VoterService } from './services/voter.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  hero: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [VoterService],
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  heroes!: any[];
  hero: any;
  displayedColumns = ["name", "lastName", "birthDate", "city", "index"];
  constructor(private heroService: VoterService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.heroService.getVoters().subscribe(heroes => {
      console.log(heroes);
      this.heroes = heroes.results;
      console.log(this.heroes);
    })
  }

  onRowClicked(row: any): void {
    console.log(row);
    const dialogRef = this.dialog.open(DialogData, {
      width: '300px',
      data: {hero: row}
    });
  }
}

@Component({
  selector: 'dialog-data',
  templateUrl: './dialog-data.html',
})
export class DialogData {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
