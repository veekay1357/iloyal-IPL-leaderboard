import { Component, OnInit } from '@angular/core';
//import {ngModel} from '@angular/common';

@Component({
  selector: 'app-accuracy-calculator',
  templateUrl: './accuracy-calculator.component.html',
  styleUrls: ['./accuracy-calculator.component.css']
})
export class AccuracyCalculatorComponent implements OnInit {

  totalRuns:number = 330;  runs_slab_count:number = 5;
  slab_values = [5,10,20,30,40,50,100];
  slab_scores = [15,10,9,8,7,6,5]
  ranges = [{}];

  constructor() { }

  ngOnInit(): void {
    this.validateScore();
  }

  validateScore() {
    var lower, upper, lower_temp:number, upper_temp:number,total_runs_temp;
    total_runs_temp = this.totalRuns;
       if (this.totalRuns  <= 10) {
         
       } else {
        lower_temp = this.totalRuns;
        upper_temp = this.totalRuns;
         for (let i=0; i < this.slab_values.length; i ++) {
           if (this.totalRuns - this.slab_values[i] > 0) {
          
             lower = String(this.totalRuns - this.slab_values[i]) + " - " +
                     String(lower_temp-1);
             console.log('lower range--' + lower);

             lower_temp = this.totalRuns - this.slab_values[i];
             upper = String(upper_temp*1 + 1 )+ " - " +
                     String(this.totalRuns*1 + this.slab_values[i]);
             console.log('upper range--' + upper);

      
             upper_temp = this.totalRuns*1 + this.slab_values[i];
             this.ranges[i]={'lower': lower,'upper':upper,'score':this.slab_scores[i]};
         }
         }
         console.log('entire rannge vaues--' + JSON.stringify(this.ranges));
       }
  }
}
