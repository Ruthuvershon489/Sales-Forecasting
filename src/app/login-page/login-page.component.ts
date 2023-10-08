import { Component, OnInit } from '@angular/core';
import { RequiredValidator } from '@angular/forms';
import {Router} from '@angular/router'; 


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private route:Router) { }

  onSubmit()
  {
		this.route.navigate(['/dashboard']) // navigate to other page
	}

  ngOnInit(): void {
  }

}
