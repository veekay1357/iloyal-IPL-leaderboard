import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Sort } from '@angular/material/sort';
import {RankServiceService} from '../../Services/rank-service.service';

export interface ranklistInt {
  Rank: number;
  Name: string;
  Credits: number;
  Credits_week: number;
}

@Component({
  selector: 'app-ranktable',
  templateUrl: './ranktable.component.html',
  styleUrls: ['./ranktable.component.css']
})


export class RanktableComponent implements OnInit {

  /*ranklist : ranklistInt[] = [
    { 
       "Rank":1, "Name":"Balachandran V S", "Credits":99,"Credits_week":1
    },
    {
       "Rank":2, "Name":"Sanjai Sasi", "Credits":100, "Credits_week":20
    },
    {
       "Rank":3,"Name":"Arunkumar M S", "Credits":181, "Credits_week":30
    }
  ];
  ranklistPrev = [
    { 
       "Rank":2, "Name":"Balachandran V S", "Credits":193,  "Credits_week":30
    },
    {
       "Rank":3, "Name":"Sanjai Sasi", "Credits":182,"Credits_week":20
    },
    {
       "Rank":1, "Name":"Arunkumar M S","Credits":181,"Credits_week":30
    }
  ];
  */
  ranklist = [];
  ranklistTemp = [];
  ranklistPrev= [];
  sortedData: ranklistInt[];

  isAsc: boolean = true;
  private leaderboar_file_url = "../../../assets/data/leaderboard_data_cur_24.json";
  private leaderboar_file_prev_url = "../../../assets/data/leaderboard_data_prev_24.json";

  constructor(private http: HttpClient, private rankService: RankServiceService) {
    this.sortedData = this.ranklist;
  }

  sortData(column: any) {
    const data = this.ranklist.slice();

    this.sortedData = data;

    this.isAsc = this.isAsc ? false : true;
    this.ranklist = data.sort((a, b) => {

      switch (column) {
        case 'Name': return this.compare(a.Name, b.Name, this.isAsc);
        case 'Credits': return this.compare(a.Credits, b.Credits, this.isAsc);
        case 'Credits_week': return this.compare(a.Credits_week, b.Credits_week, this.isAsc);
        default: return 0;
      }
    });
    //console.log(this.ranklist);
  }



  formatJSON() {
  
    this.getJSONcurrent().subscribe(data => {
      this.ranklistTemp.push(data);
    });
    this.getJSONPrev().subscribe(data => {
      this.ranklistPrev.push(data);
    });
    
    //console.log("oninit", this.ranklist, this.ranklistPrev);
    this.calculateRank();
  }

  getJSONcurrent():Observable<any> {
    return this.http.get(this.leaderboar_file_url);
  }

  getJSONPrev():Observable<any> {
    return this.http.get(this.leaderboar_file_prev_url);
  }

  ngOnInit(): void {
    this.rankService.getEmployeeDetails();
    this.formatJSON();
    // this.getJSONPrev();
  }


  calculateRank() {
    setTimeout(() => {
      this.ranklist = this.ranklistTemp[0];
      //console.log('inside rank method--'+this.ranklist[0].length);
    for (let i = 0; i < this.ranklist.length; i++) {
      for (let j = 0; j < this.ranklistPrev[0].length; j++) {
        if (this.ranklist[i].Name == this.ranklistPrev[0][j].Name) {
          var diff = this.ranklist[i].Rank - this.ranklistPrev[0][j].Rank;
          if (diff <= 0) {
            this.ranklist[i]['RankShift'] = { 'Up': true, 'Diff': diff*-1 };
          } else {
            this.ranklist[i]['RankShift'] = { 'Up': false, 'Diff': diff }
          }
        }
      }
    }
    //console.log(this.ranklist);
    }, 2000);
    
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}

// function compare(a: number | string, b: number | string, isAsc: boolean) {
//   return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
// }