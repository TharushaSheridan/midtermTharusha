import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  processorModel: string = '';
  processorManufacturer: string = 'Intel';
  windows11Compatibility: boolean = false;

  constructor(private router: Router) {}

  onSubmit() {
    const processorData = {
      model: this.processorModel,
      manufacturer: this.processorManufacturer,
      windows11Compatibility: this.windows11Compatibility,
    };

    // Navigate to the output page and pass processorData as a parameter
    this.router.navigate(['/output', processorData]);
  }
}
