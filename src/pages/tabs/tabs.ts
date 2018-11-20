import { Component } from '@angular/core';

import { SchedulePage } from '../schedule/schedule';
import { SpeakerPage } from '../speaker/speaker';
import { ContactPage } from '../contact/contact';
import { MapPage } from  '../map/map';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SchedulePage;
  tab2Root = SpeakerPage;
  tab3Root = ContactPage;
  tab4Root = MapPage;

  constructor() {

  }
}
