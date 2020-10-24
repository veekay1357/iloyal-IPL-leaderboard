import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-result',
  templateUrl: './match-result.component.html',
  styleUrls: ['./match-result.component.css']
})
export class MatchResultComponent implements OnInit {

  first = [
    { name: "Vivek", age: 33 },
    { name: "Hemand", age: 24 }
  ]
    ;

  matchResult = [{
                first:{name:"Paul Eldho",img:"../../../assets/images/paul.png"},
                second:{name:"Infant Frederic",img:"../../../assets/images/infant.png"},
                third:{name:"Biny Alias",img:"../../../assets/images/biny.png"}
                 },
                 {
                first:{name:"Infant Frederic",img:"../../../assets/images/infant.png"},
                second:{name:"Ramakrishnan Kolappan",img:"../../../assets/images/Ram.png"},
                third:{name:"Shinu Ramakrishna Pillai",img:"../../../assets/images/shinu.png"}
                   }
  ];

  matchResultSelected : any;
  constructor() { }

  ngOnInit(): void {
     this.openMatchResult("Match1");
  }

  openMatchResult(match:string) {
    let myBtns=document.querySelectorAll('.tablinks-match');
    myBtns.forEach(function(btn) {

        btn.addEventListener('click', () => {
          myBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        });
 
    });
    switch(match) {
      case 'Match1': {this.matchResultSelected = this.matchResult[0]; return;}
      case 'Match2': {this.matchResultSelected = this.matchResult[1]; return;}
    }
  }
}
