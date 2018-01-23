import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class HumanComponent implements OnInit {
  age:number;
  isEligible:boolean;
  checkeligibility(age){
    if(age>18){
      this.isEligible=true;
      console.log("Permit vote");
      alert("You are eligible for voting");
    }
    else{
      this.isEligible = false;
      console.log(age);
      alert("You are not eligible for voting");
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
