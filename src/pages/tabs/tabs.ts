import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { LivePage } from '../live/live';
import { StarPage } from '../star/star';
import { FoundPage } from '../found/found';
import { MyPage } from '../my/my';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = LivePage;
  tab3Root: any = StarPage;
  tab4Root: any = FoundPage;
  tab5Root: any = MyPage;
  constructor() {

  }
}
