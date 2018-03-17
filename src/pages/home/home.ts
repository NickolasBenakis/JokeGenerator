import {Component, OnInit} from '@angular/core';
import {LoadingController, NavController} from 'ionic-angular';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Joke} from "./Joke";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

localJoke: Joke;
  constructor(public navCtrl: NavController,
              private httpClient:HttpClient,
              private loadingController:LoadingController) {

  }

  ngOnInit(){
    this.GetJoke();
  }



  GetJoke(){
let loader=this.loadingController.create({
content:'Getting Joke'  });

loader.present().then(()=> {
      this.httpClient
        .get<Joke>('https://api.chucknorris.io/jokes/random')
        .subscribe(joke => {
          this.localJoke = joke
          loader.dismiss();
        });
    });




  }



}
