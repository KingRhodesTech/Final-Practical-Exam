import { Component } from '@angular/core';
import { CensusService } from '../census.service';

@Component({
  selector: 'app-update-census',
  templateUrl: './update-census.component.html',
  styleUrls: ['./update-census.component.css'],
})
export class UpdateCensusComponent {
  record: any = {};

  constructor(private censusService: CensusService) {}

  updateRecord() {
    this.censusService
      .updateCensus(this.record._id, this.record)
      .subscribe(() => {
        // Handle success
      });
  }
}
