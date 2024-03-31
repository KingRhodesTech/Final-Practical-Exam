import { Component, OnInit } from '@angular/core';
import { CensusService } from '../census.service';

@Component({
  selector: 'app-census-list',
  templateUrl: './census-list.component.html',
  styleUrls: ['./census-list.component.css'],
})
export class CensusListComponent implements OnInit {
  censusRecords: any[];

  constructor(private censusService: CensusService) {}

  ngOnInit(): void {
    this.getCensus();
  }

  getCensus() {
    this.censusService.getCensus().subscribe((data) => {
      this.censusRecords = data;
    });
  }

  deleteRecord(id: string) {
    this.censusService.deleteCensus(id).subscribe(() => {
      this.getCensus(); // Refresh the list after deletion
    });
  }
}
