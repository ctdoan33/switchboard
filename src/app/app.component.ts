import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  switches = ["ON","ON","ON","ON","ON","ON","ON","ON","ON","ON"];
  switch = function(index){
	  if(this.switches[index]=="ON"){
		this.switches[index]="OFF";
	  }else if(this.switches[index]=="OFF"){
		this.switches[index]="ON"
	  }
  }
}
