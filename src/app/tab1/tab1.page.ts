import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public data: any;
  Object = Object

  constructor(private apiService: ApiService){}

  ngOnInit(){ 
    this.apiService.getData().subscribe(data => {
      this.data = data;
      this.data.ouders = [this.data.vader, this.data.moeder];
      delete this.data.moeder;
      delete this.data.vader;
    })
  }
}
