import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IpserviceService} from './../Services/findip/ipservice.service';
//import { HttpParams } from '__node_modules/@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RankServiceService {

  jsonData = [];
  constructor(private http : HttpClient, private ipservice: IpserviceService) { }
  
  getEmployeeDetails() {
    // this.http.get ("http://3.14.73.176:8085/api/getEmployees",{}).subscribe(data =>{
    //   //this.jsonData.push(data[0]);
    //   console.log('API test--' + JSON.stringify(data));
    //   //return data;
    // });
    this.ipservice.getIPAddress().subscribe(ip =>{
      console.log("IP ADDRESS--" + ip["ip"]);
      let param = new HttpParams();
      param.set("ipaddress","testIp");
      let url:string = "http://3.14.73.176:8085/api/getEmployees" + "?ipaddress=" + ip["ip"];
      this.http.get (url,{}).subscribe(data =>{
        console.log('API test--' + JSON.stringify(data));
        
      });
    });
    
   
   

    
  }
}
