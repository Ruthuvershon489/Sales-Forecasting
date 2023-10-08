import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title = 'Front-end';

  //form:FormGroup;
  // shortLink: string = "";
  loading: boolean = false;
  file: File; // Variable to store file
  period = "";


  constructor(private auth:ServiceService, private route:Router) {}    

  ngOnInit(): void {}

  onChange(event)
  {
    console.log(" File received");
    this.file = event.target.files[0];
    console.log(this.file.name)
    console.log(">>>>>>>>>>>", this.period);
    
  }

  getVal(val)
  {
    //this.period = event.target.value;
    this.period = val;
    console.log(this.period);
    //console.log(">>>>>>>>>>>", val);
  }
  submit()
  {
    this.loading = !this.loading;
    this.auth.send_post_request(this.file, this.period).subscribe(
      (event: any) => {
        if (typeof (event) === 'object') {
          this.loading = false; // Flag variable
        }
      }
    )
		this.route.navigate(['/chartpage']) // navigate to chart page
  }
}
