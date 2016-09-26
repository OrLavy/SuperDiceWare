import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';

/*
  Generated class for the PasswordGeneratorPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/password-generator/password-generator.html',
})
export class PasswordGeneratorPage {
  generatedPasswords : Array<String> = ["No passwords generated yet"];

  constructor(private navCtrl: NavController, public actionSheetCtrl : ActionSheetController) {

  }

  performBasicGeneration(){
    console.log("DEV :: Basic random")
  }

  performPhotoBasedGeneration(){
    console.log("DEV :: Picture seed")
  }

  /**
   * creates and shows the action sheet
   */
  presentGenerationSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title : 'Choose generation method',
      buttons : [
        {
          text : 'Basic Pseudo-random',
          handler : this.performBasicGeneration
        },
        {
          text : 'Picture based seed',
          handler : this.performPhotoBasedGeneration
        },
        {
          text : 'Cancel',
          role : 'cancel'
        }
      ]
    });

    actionSheet.present();
  }
}
