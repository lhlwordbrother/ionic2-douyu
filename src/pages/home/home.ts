import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {Douyu} from '../../providers/douyu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data=[];//首页数据
  bannerData:any;//banner数据
  hot() {
    this.Douyu.getList('').subscribe(
      (data:any) => {
        this.data = data.data;
        console.log(this.data)
        this.banner();
      }
    );
  }
  banner() {
    let arr = [];
    let sum = this.data.length;
    let data1 = eval(JSON.stringify(this.data));
    for(let i =0;i<5;i++){
      let x = Math.floor( Math.random()*(sum--) );
      arr.push(data1[x]);
      data1.splice(x,1);
    }
    this.bannerData = arr;
  }
  constructor(public navCtrl: NavController,public Douyu:Douyu) {
    this.hot();
  }

}
