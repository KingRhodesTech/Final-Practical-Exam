import { Component } from '@angular/core';
import { CensusService } from '../census.service';

@Component({
  selector: 'app-add-census',
  templateUrl: './add-census.component.html',
  styleUrls: ['./add-census.component.css'],
})
export class AddCensusComponent {
  record: any = {};

  constructor(private censusService: CensusService) {}

  addRecord() {
    this.censusService.addCensus(this.record).subscribe(() => {
      this.record = {}; // Clear the form after adding
    });
  }
}
