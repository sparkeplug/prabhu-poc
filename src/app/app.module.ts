import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { KpmgLoginComponent } from './kpmg-login/kpmg-login.component';
import { KpmgHomeComponent } from './kpmg-home/kpmg-home.component';
import { KpmgAboutComponent } from './kpmg-home/kpmg-about/kpmg-about.component';
import { KpmgWhatWeDoComponent } from './kpmg-home/kpmg-what-we-do/kpmg-what-we-do.component';
import { KpmgCaseStudiesComponent } from './kpmg-home/kpmg-case-studies/kpmg-case-studies.component';
import { KpmgEngagementsComponent } from './kpmg-home/kpmg-engagements/kpmg-engagements.component';
import { KpmgLeadersSpeakComponent } from './kpmg-home/kpmg-leaders-speak/kpmg-leaders-speak.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [
  { path: 'login', component: KpmgLoginComponent },
  { path: '', component: KpmgHomeComponent ,children: [
    { path: '', redirectTo: 'about', pathMatch: 'full'},
    { path: 'about', component: KpmgAboutComponent },
    { path: 'what-we-do', component: KpmgWhatWeDoComponent ,pathMatch:'full'},
    { path: 'case-studies', component: KpmgCaseStudiesComponent ,pathMatch:'full'},
    { path: 'engagements', component: KpmgEngagementsComponent ,pathMatch:'full'},
    { path: 'leaders-speak', component: KpmgLeadersSpeakComponent ,pathMatch:'full'}
  ]},
  { path: '', redirectTo: 'about', pathMatch: 'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    KpmgLoginComponent,
    KpmgHomeComponent,
    KpmgAboutComponent,
    KpmgWhatWeDoComponent,
    KpmgCaseStudiesComponent,
    KpmgEngagementsComponent,
    KpmgLeadersSpeakComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
