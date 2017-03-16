import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Douyu provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Douyu {
  getList(listName){
    let url = '/api/live/'+listName+'?limit=16';
    return this.http.get(url).map(
      (res:any) => {
        return res.json();
      }
    );
  }
  getHomeData(){
    let url = 'douyu/index/getHomeData';
    return this.http.get(url).map(
      (res:any) => {
        return res.json();
      }
    );
  }
  constructor(public http: Http) {
    
  }

}
