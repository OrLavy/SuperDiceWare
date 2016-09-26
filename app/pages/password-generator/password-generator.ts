import { Component } from '@angular/core';
import { NavController, ActionSheetController, LoadingController } from 'ionic-angular';

import { PasswordGeneration } from '../../providers/password-generation/password-generation';

/*
  Generated class for the PasswordGeneratorPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/password-generator/password-generator.html',
  providers : [PasswordGeneration]
})
export class PasswordGeneratorPage {
  // Holds the generated passwords combinations
  generatedPasswords : Array<String> = ["No passwords generated yet"];

  loaderElement : any;

  keeper = this;

  constructor(private navCtrl: NavController, public actionSheetCtrl : ActionSheetController,
  private loadingController : LoadingController,
  private passwordGeneration : PasswordGeneration) {
    this.loaderElement = this.loadingController.create({
      content : "Generating passwords..."
    });
  } 

  performBasicGeneration() {
    this.presentLoader();
  
    this.passwordGeneration.generateBasicRandomPasswords().then(passwords => {
      this.hideLoader();
      this.generatedPasswords = passwords;
    });

    return true;
  }

  performPhotoBasedGeneration() : Promise<boolean>{
    console.log("DEV :: Picture seed");
    
    this.passwordGeneration.generatePhotoBasedPasswords().then(passwords => this.generatedPasswords = passwords);

    // Tell the ActionSheet everything is Ok
    return new Promise<boolean>(resolve => true);
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
          handler : () => {
            this.performBasicGeneration();
          }
        },
        {
          text : 'Picture based seed',
          handler : this.performBasicGeneration
        },
        {
          text : 'Show',
          handler : () => {
            this.presentLoader();
          }
        },
        {
          text : 'Cancel',
          role : 'cancel'
        }
      ]
    });

    actionSheet.present();
  }
  
  presentLoader(){
    this.loaderElement.present();
  }

  hideLoader(){
    this.loaderElement.dismiss();
  }
}
