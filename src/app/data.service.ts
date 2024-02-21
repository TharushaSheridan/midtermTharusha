import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private processorData: any;

  constructor() {}

  setData(data: any) {
    this.processorData = data;
  }

  getData() {
    return this.processorData;
  }
}
