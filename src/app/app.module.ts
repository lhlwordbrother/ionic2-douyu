import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { LivePage } from '../pages/live/live';
import { StarPage } from '../pages/star/star';
import { FoundPage } from '../pages/found/found';
import { MyPage } from '../pages/my/my';

import { Douyu } from '../providers/douyu';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LivePage,
    StarPage,
    FoundPage,
    MyPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LivePage,
    StarPage,
    FoundPage,
    MyPage,
    TabsPage
  ],
  providers: [Douyu,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
