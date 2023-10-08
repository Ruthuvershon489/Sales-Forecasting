import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; // import router from angular router


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'sales';
  constructor(private route:Router){} 
  
  	onSubmit(){
		this.route.navigate(['/dashboard']) // navigate to other page
	}
}