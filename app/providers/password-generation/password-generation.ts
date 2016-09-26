import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PasswordGeneration provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PasswordGeneration {

  // Temporal Array for "Basic random"
  tempBasicRandomArray : Array<string> = ['One two three four five', 'dog cat camal bug fly'];
  tempPhotoRandomArray : Array<string> = ['picOne two three four five', 'picdog cat camal bug fly'];

  constructor() {}
  

  generateBasicRandomPasswords() : Promise<Array<string>> {
    return new Promise<Array<string>>(resolve =>
    setTimeout(resolve,3000)).then(() => this.tempBasicRandomArray);
    
    /*return new Promise(resolve => {
      for (let i =0; i < 4000000000; i++);
      console.log("DEV :: Finished counting");
      resolve(this.tempBasicRandomArray);
    }); */
  }

  generatePhotoBasedPasswords() : Promise<Array<string>> {
    
    return new Promise(resolve => {
      resolve(this.tempPhotoRandomArray);
    });
  }

}

