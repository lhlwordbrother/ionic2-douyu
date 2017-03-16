import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {Douyu} from '../../providers/douyu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  allData:any;
  bannerData:any;//banner数据
  hotList:any;//最热
  hotListIndex = 0;
  getHomeData() {
    this.Douyu.getHomeData().subscribe(
      (data:any) => {
        this.allData = data;
        this.bannerData = data.banner;
        this.hotList = data.hotList[this.hotListIndex].data;
      }
    );
  }
  changeHot() {
    let i = Math.floor(this.allData.hotList.length*Math.random());
    if(i == this.hotListIndex){
      this.hotListIndex==0?i++:i--;
    }
    this.hotListIndex = i;
    this.hotList = this.allData.hotList[i].data;
  }
  constructor(public navCtrl: NavController,public Douyu:Douyu) {
    this.getHomeData();
  }

}
