import { Component } from '@angular/core';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'job workex!';
  disp: any ={};
  
  

  constructor(private dataService:DataService) {

    console.log("Job");
    this.dataService.getJobs().subscribe((res:any)=>{
      this.disp=res.data.jobs;
    })

  } 
}   
