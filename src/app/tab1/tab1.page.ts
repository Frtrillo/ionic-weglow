import { Component } from '@angular/core';
import { WeglowtestService } from '../api/v1/weglowtest.service';
import { Weglowversion } from '../models/weglowversion.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  loadingRequest = false;
  weglowServerVersion = new Weglowversion();
  showVersionInfo=false;
  constructor(private weglowService: WeglowtestService) {


  }

  async getWeglow() {
    console.log('getWeglow() called');
    this.loadingRequest = true;
    this.weglowService.getWeglowVersio().subscribe(
      {
        error: () => {
          alert('Error while requesting data to WeGlow server');
        },
        next: (data) => {
          setTimeout(() => {
            this.loadingRequest = false;
            this.weglowServerVersion = data;
            this.showVersionInfo=true;
          }, 300);
        },

      }
    );

  }
}
