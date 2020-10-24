import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-all-game-results',
  templateUrl: './all-game-results.component.html',
  styleUrls: ['./all-game-results.component.css']
})
export class AllGameResultsComponent implements OnInit {

  // allgameRes = [
  //   {No:1,Date:"18-09-2020",Game:"MI vs CSK",First:"Bala",Second:"Sanjai",Third:"Shanu",idUrl:"../../../assets/images/gameresults/1.jpg",nameUrl:"../../../assets/images/gameresults/one.JPG"},
  //   {No:1,Date:"18-09-2020",Game:"MI vs CSK",First:"Abhaya",Second:"Amal",Third:"Sanal",idUrl:"../../../assets/images/gameresults/2.jpg",nameUrl:"../../../assets/images/gameresults/two.jpg"}
  // ];

  private data_file_url = "../../../assets/data/data_24.json";

  idTitle:any;
  idUrl:any;
  showModal : boolean;
  allgameRes = [];
  ranklistTemp = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.formatJSON();
    setTimeout(() => {
      this.allgameRes = this.ranklistTemp[0];
    }, 2000);
    
    //console.log('All game results--' + this.allgameRes);
  }

  formatJSON() {
  
    this.getJSONcurrent().subscribe(data => {
      this.ranklistTemp.push(data);
      //console.log('All game results--' + this.ranklistTemp[0].length);
    });
  }
  getJSONcurrent():Observable<any> {
    return this.http.get(this.data_file_url);
  }
  gameidClicked(id,name,url){
    //console.log(url);
    this.idTitle = id + " " + name;
    this.idUrl = url;
    this.showModal = true;
  }

  gameNameClicked(id,name,url){
    //console.log(url);
    this.idTitle = id + " " + name;
    this.idUrl = url;
    this.showModal = true;
  }

  hide() {
    this.showModal = false;
  }
}
