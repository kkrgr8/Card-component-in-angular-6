import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core'; 


@Component({
  selector: 'app-site-card',
  templateUrl: './site-card.component.html',
  styleUrls: ['./site-card.component.css']
})
export class SiteCardComponent implements OnInit {

  @Input() site_info: any[];
  public card_data:any[]

  @Output() someEvent: EventEmitter<String> = new EventEmitter<string>();

  constructor() {
  	//
  }

  ngOnInit() {
  this.card_data = this.site_info;
}



callParent(args) {
	
	
    this.someEvent.emit(args);
}



}
