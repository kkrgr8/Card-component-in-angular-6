import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cards';

  public sites = [{
    "id" : 2,
		"title": "McDonald's Las Vegas",
		"subtitle": "Las Vegas, NV USA",
		"data": [{
    label:'Devices',
    value:2
  }, {
    label:'Active since',
    value: '23/10/2017'
  }, {
    label:'ZTA Status',
    value: 'Activated',
    badge:true,
    badgeValue:3,
    badgeColor:'warn'
  }, {
    label:'Status',
    value: 'In-progress'
  }],
		footIcon:[{
  	icon: "edit",
  	action: "edit",
    params: {"id":1}
  },{
    icon: "remove_red_eye",
    action: "viewDetails",
    params: {"id":2}
  },{
    icon: "warning",
    action: "warning",
    params: {"id":2},
    badge:true,
    badgeValue:3,
    badgeColor:'warn'
  }]
	},
  { "id" : 2,
    "title": "McDonald's Las Vegas",
    "subtitle": "Las Vegas, NV USA",
    "data": [{
    label:'Devices',
    value:8
  }, {
    label:'Active since',
    value: '12/10/2017'
  }, {
    label:'ZTA Status',
    value: 'Activated',
    badge:true,
    badgeValue:1,
    badgeColor:'warn'
  }, {
    label:'Status',
    value: 'In-progress'
  }],
  footIcon:[{
    icon: "edit",
    action: "edit",
    params: {"id":2}
  },{
    icon: "remove_red_eye",
    action: "viewDetails",
    params: {"id":2}
  }]
  },
  { "id" : 2,
    "title": "McDonald's Las Vegas",
    "subtitle": "Las Vegas, NV USA",
    "data": [{
    label:'Devices',
    value:8
  }, {
    label:'Active since',
    value: '12/10/2017'
  }, {
    label:'ZTA Status',
    value: 'Activated',
    badge:true,
    badgeValue:1,
    badgeColor:'warn'
  }, {
    label:'Status',
    value: 'In-progress'
  }],
  footIcon:[{
    icon: "edit",
    action: "edit",
    params: {"id":2}
  },{
    icon: "remove_red_eye",
    action: "viewDetails",
    params: {"id":2}
  }]
  }
];

childcalling(childData){
   let fun = childData.action;
   this[fun]();

}

edit(){
  alert('edit');
}

viewDetails(){
  alert('viewDetails');
}

warning(){
  alert('warning')
}

  

}
