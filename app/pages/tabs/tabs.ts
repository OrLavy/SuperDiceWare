import { Component } from '@angular/core';
import { PasswordGeneratorPage } from '../password-generator/password-generator';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})

export class TabsPage {

  public tabPasswordGeneratorRoot: any;
  public tabAboutRoot: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tabPasswordGeneratorRoot = PasswordGeneratorPage;
    this.tabAboutRoot= AboutPage;
  }
}
