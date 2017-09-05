import { Component, OnInit } from '@angular/core';
import {environment} from '../environments/environment';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: environment.firebase_apiKey,
      authDomain: environment.firebase_authDomain
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
