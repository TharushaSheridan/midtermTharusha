import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: [],
})
export class OutputComponent {
  processorData: any;

  constructor(private route: ActivatedRoute) {
    // Retrieve processorData from route parameters
    this.route.params.subscribe((params) => {
      this.processorData = params;
    });
  }
}
