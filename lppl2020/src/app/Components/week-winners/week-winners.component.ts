import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week-winners',
  templateUrl: './week-winners.component.html',
  styleUrls: ['./week-winners.component.css']
})
export class WeekWinnersComponent implements OnInit {

  tabcontentDisplay:boolean = false;
  week_winner:any;

    
  all_week_winners = [{First:{Name:"Balachandran V S",img:"../../../assets/images/bala.png"},
                  Second:{Name:"Sanjai Sasi",img:"../../../assets/images/sanjaisasi.png"},
                  Third:{Name:"Arunkumar M S",img:"../../../assets/images/arunkumar.jpeg"}
                },
                {First:{Name:"Arunkumar M S",img:"../../../assets/images/arunkumar.jpeg"},
                  Second:{Name:"Deepu J S",img:"../../../assets/images/deepu.png"},
                  Third:{Name:"Abhaya S L",img:"../../../assets/images/abhaya.png"}
                },
                {First:{Name:"Sheeba P J",img:"../../../assets/images/sheeba.png"},
                Second:{Name:"Jiju Mathew",img:"../../../assets/images/jiju.png"},
                Third:{Name:"Betty George",img:"../../../assets/images/betty.png"}
                },
                {First:{Name:"Ramakrishnan Kolappan",img:"../../../assets/images/Ram.png"},
                Second:{Name:"Prasanth Kumar T",img:"../../../assets/images/prasanth.png"},
                Third:{Name:"Seenia Mathew",img:"../../../assets/images/seenia.png"}
                },
                {First:{Name:"Sheeba P J",img:"../../../assets/images/sheeba.png"},
                Second:{Name:"Priyadharshini K",img:"../../../assets/images/priya.png"},
                Third:{Name:"Balachandran V S",img:"../../../assets/images/bala.png"}
                },
                {First:{Name:"",img:""},
                Second:{Name:"",img:""},
                Third:{Name:"",img:""}
                },
                {First:{Name:"",img:""},
                Second:{Name:"",img:""},
                Third:{Name:"",img:""}
                },
                {First:{Name:"",img:""},
                Second:{Name:"",img:""},
                Third:{Name:"",img:""}
                },

              ];

  constructor() { }

  ngOnInit(): void {
    this.openWeek('Week5');
  }

  openWeek(week:string) {
    let myBtns=document.querySelectorAll('.tablinks');
    myBtns.forEach(function(btn) {

        btn.addEventListener('click', () => {
          myBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        });
 
    });
    this.tabcontentDisplay = true;

    switch (week) {
      case 'Week1': {this.week_winner = this.all_week_winners[0];
                     console.log(this.week_winner);
                     return;}

      case 'Week2': {this.week_winner = this.all_week_winners[1];
                      console.log(this.week_winner);
                      return;}
      case 'Week3': {this.week_winner = this.all_week_winners[2];
                    console.log(this.week_winner);
                        return;}
      case 'Week4': {this.week_winner = this.all_week_winners[3];
                      console.log(this.week_winner);
                        return;}
      case 'Week5': {this.week_winner = this.all_week_winners[4];
                      console.log(this.week_winner);
                        return;}
      case 'Week6': {this.week_winner = this.all_week_winners[5];
                      console.log(this.week_winner);
                          return;}
      case 'Week7': {this.week_winner = this.all_week_winners[6];
                        console.log(this.week_winner);
                        return;}
      case 'Week8': {this.week_winner = this.all_week_winners[7];
                    console.log(this.week_winner);
                    return;}
    }
  }
}
