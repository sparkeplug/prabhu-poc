import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from  '@angular/router';

@Component({
  selector: 'app-kpmg-leaders-speak',
  templateUrl: './kpmg-leaders-speak.component.html',
  styleUrls: ['./kpmg-leaders-speak.component.scss']
})
export class KpmgLeadersSpeakComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("current route--",this.route.snapshot.routeConfig.path);
  }

}
