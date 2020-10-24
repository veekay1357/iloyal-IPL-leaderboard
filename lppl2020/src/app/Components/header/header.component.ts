import { Component, OnInit } from '@angular/core';
import { LiveScoreService } from 'src/app/Services/livescore/live-score.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showRuleModal: boolean = false;
  showAccuracyModal: boolean = false;
  showLiveScore: boolean = false;

  /*Accuracy Caluclator modal starts*/
  dummy_value = 0; //can be rus/boudaries/individual score
  max_slab_score = 20;
  min_slab_score = 3;

  totalRuns: number = (this.dummy_value > 0 ? this.dummy_value : null); 
  runs_slab_count: number = 5;
  slab_values = [3, 6, 10, 15, 23];
  slab_scores = [17, 15, 10, 8, 5];
  ranges = [{}];
  /*Accuracy Caluclator modal ends*/

  /* Live Score Starts */
  showHideAnsTable: boolean = false;
  showHidePlayerTable: boolean = false;
  today_match: string;
  rightAnswers = [];
  playerScore = [];
  playerScores = [];
  rightAnswer = {
    "Ques1": "Who will hit the 2nd 6 for Mumbai Indians (MI) today?",
    "Ques2": "Will Chennai Super Kings (CSK) score more runs in the 1st over than Mumbai Indians (MI) ?",
    "Ques3": "Which team will score more boundaries today? (incl 4's & 6's)",
    "Ques4": "How many runs will the team batting 1st score in the 1st 55 balls of the match?",
    "Ques5": "Will Chennai Super Kings (CSK) win today's match?"
  };
  /* Live Score ends */

  constructor(private liveScoreService: LiveScoreService) { }

  ngOnInit(): void {
    this.validateScore();
    console.log("=======window==========" + window.location);

    this.liveScoreService.getMatchRightAnswers().subscribe(data => {
      //var dataMap = Object.keys(data).map(key =>{value:data[key]});
      this.parseRightAnswers(data);

    });


    this.liveScoreService.getPlayerScore().subscribe(data => {
      console.log('Player answers--');
      this.parsePlayerScores(data);
    });
  }

  ruleClicked() {
    this.showRuleModal = true;
    console.log('on rule click right ans' + this.rightAnswers);
  }

  hideRuleModal() {
    this.showRuleModal = false;
  }
  /*accuracy calculator */
  accuracyClicked() {
    this.showAccuracyModal = true;
    this.validateScore();
  }

  hideAccuracyModal() {
    this.showAccuracyModal = false;
    this.resetActualScore();

  }

  liveScoreClicked() {
    this.showLiveScore = true;
  }

  hideLiveScore() {
    this.showLiveScore = false;
  }

  validateScore() {
    if (this.totalRuns > 0) {
      this.ranges = [];
      var lower, upper, lower_temp: number, upper_temp: number, total_runs_temp;
      total_runs_temp = this.totalRuns;

      lower_temp = this.totalRuns;
      upper_temp = this.totalRuns;
      var index = 0;

      this.ranges[index] = {
        'lower': total_runs_temp,
        'upper': total_runs_temp, 'score': this.max_slab_score
      };

      for (let i = 1; i <= this.slab_values.length; i++) {
        index = i;
        if (this.totalRuns - this.slab_values[i - 1] > 0) {

          lower = String(this.totalRuns - this.slab_values[i - 1]) + " - " +
            String(lower_temp - 1);
          console.log('lower range--' + lower);

          lower_temp = this.totalRuns - this.slab_values[i - 1];
        } else {
          lower = "" + " - " + "";
        }
        upper = String(upper_temp * 1 + 1) + " - " +
          String(this.totalRuns * 1 + this.slab_values[i - 1]);
        console.log('upper range--' + upper);


        upper_temp = this.totalRuns * 1 + this.slab_values[i - 1];
        this.ranges[i] = { 'lower': lower, 'upper': upper, 'score': this.slab_scores[i - 1] };

      }
      lower_temp > 0 ? lower_temp -= 1 : 0;
      upper_temp += 1;
      if (lower_temp > 0) {
        this.ranges[index + 1] = {
          'lower': 0 + ' - ' + lower_temp,
          'upper': upper_temp + ' - ', 'score': this.min_slab_score
        };
      } else {
        this.ranges[index + 1] = {
          'lower': "" + ' - ' + "",
          'upper': upper_temp + ' - ', 'score': this.min_slab_score
        };
      }
      console.log('entire rannge vaues--' + JSON.stringify(this.ranges));
    }
  }
  resetActualScore() {
    this.totalRuns = this.dummy_value;
  }
  /*accuracy calculator */

  /*Live Score starts */
  parseRightAnswers(data: any) {
    //console.log('Inside parse method--'+ JSON.stringify(data));
    var dataString = JSON.stringify(data);
    let start: number = dataString.indexOf("[");
    let end: number = dataString.indexOf("]");
    var dataSubString = dataString.substring(start + 2, end - 1);

    //console.log('DataSubString---'+dataSubString);
    var jsonData: any = dataSubString.split(",");

    var temp = {};
    for (let i = 0; i < jsonData.length; i++) {
      console.log(jsonData[i]);
      var key = jsonData[i].split(":")[0];
      var value = jsonData[i].split(":")[1];
      key = key.replace("\"", "");
      key = key.replace("\"", "");
      value = value.replace("\"", "");
      value = value.replace("\"", "");
      switch (key) {
        case 'match': { temp['match'] = value; this.today_match = value; break; };
        case 'matchid': { temp['matchid'] = value; break; }
        case 'qn1': { temp['qn1'] = value; this.rightAnswer['Ans1'] = value; break; }
        case 'qn2': { temp['qn2'] = value; this.rightAnswer['Ans2'] = value; break; }
        case 'qn3': { temp['qn3'] = value; this.rightAnswer['Ans3'] = value; break; }
        case 'qn4': { temp['qn4'] = value; this.rightAnswer['Ans4'] = value; break; }
        case 'qn5': { temp['qn5'] = value; this.rightAnswer['Ans5'] = value; break; }
      }

    }
    this.rightAnswers.push(<JSON>temp);
    //console.log('Right answers--' + this.rightAnswers[0]);
  }

  parsePlayerScores(data: any) {
    //console.log('Inside parse method--'+ JSON.stringify(data));
    var dataString = JSON.stringify(data);
    let start: number = dataString.indexOf("[{");
    let end: number = dataString.indexOf("}]");
    //var dataSubString = dataString.substring(start + 2,end-1);
    var fullPlayerData = dataString.slice(2, dataString.length - 2);
    //console.log('playerData---'+fullPlayerData);
    let eachPlayerData: any = fullPlayerData.split("},{");
    //console.log('just one sample data--'+eachPlayerData[1]);
    //var jsonData:any = fullPlayerData.split(",");

    var temp = {};
    for (let i = 0; i < eachPlayerData.length; i++) {
      temp = {};
      console.log(eachPlayerData[i]);
      let playerAttributes = eachPlayerData[i].split(",");
      for (let j = 0; j < playerAttributes.length; j++) {

        var key = playerAttributes[j].split(":")[0];
        var value = playerAttributes[j].split(":")[1];
        key = key.replace("\"", "");
        key = key.replace("\"", "");
        value = value.replace("\"", "");
        value = value.replace("\"", "");
        switch (key) {
          case 'match': { temp['match'] = value; break; };
          case 'name': { temp['name'] = value; break; }
          case 'totalscore': { temp['totalscore'] = value; break; }
          case 'qn1': { temp['qn1'] = value; break; }
          case 'qn2': { temp['qn2'] = value; break; }
          case 'qn3': { temp['qn3'] = value; break; }
          case 'qn4': { temp['qn4'] = value; break; }
          case 'qn5': { temp['qn5'] = value; break; }
        }
      }
      this.playerScore[i] = (<JSON>temp);
    }

    console.log('Player answers--' + this.playerScores);
  }

  toggleAnsTableDisplay() {
    this.showHideAnsTable = (this.showHideAnsTable ? false : true);
  }
  toggleScoreTableDisplay() {
    this.showHidePlayerTable = (this.showHidePlayerTable ? false : true);
  }
  /*Live Score ends */
}
