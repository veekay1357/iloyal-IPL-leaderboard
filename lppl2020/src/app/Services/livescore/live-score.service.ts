import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LiveScoreService {

  
  constructor(private http:HttpClient) { }

  getMatchRightAnswers() {
    return this.http.get ("http://3.14.73.176:8085//secret_url/lppl/findrightanswers",{});
    /*.subscribe(data =>{
      //this.jsonData.push(data[0]);
      //console.log('Live score-right answers--' + JSON.stringify(data));
      console.log('Fetched right Answers');
      //return data;
    });*/
   
  }

  getPlayerScore() {
    return this.http.get ("http://3.14.73.176:8085//secret_url/lppl/findyourscore",{});
    /*.subscribe(data =>{
      //this.jsonData.push(data[0]);
      //console.log('Live score-player scores--' + JSON.stringify(data));
      console.log('Fetched player scores');
      //return data;
    });*/
   
  }
}
