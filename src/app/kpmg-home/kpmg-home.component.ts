import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from  '@angular/router';

@Component({
  selector: 'app-kpmg-home',
  templateUrl: './kpmg-home.component.html',
  styleUrls: ['./kpmg-home.component.scss']
})
export class KpmgHomeComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("current route--",this.route.snapshot.routeConfig.path);
  }

}
