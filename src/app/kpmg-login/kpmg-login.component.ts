import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from  '@angular/router';

@Component({
  selector: 'app-kpmg-login',
  templateUrl: './kpmg-login.component.html',
  styleUrls: ['./kpmg-login.component.scss','./util.css']
})
export class KpmgLoginComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("current route--",this.route.snapshot.routeConfig.path);
  }

}
