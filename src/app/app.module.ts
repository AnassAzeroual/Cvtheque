import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormationComponent } from './content/formation/formation.component';
import { ExperienceComponent } from './content/experience/experience.component';
import { ContactComponent } from './content/contact/contact.component';
import { DetailsComponent } from './content/details/details.component';
import { NavComponent } from './nav/nav.component';

const CVRoutes: Routes = [
  {path : "", component: ExperienceComponent},
  {path : "experience", component: ExperienceComponent},
  {path : "formation", component: FormationComponent},
  {path : "contact", component: ContactComponent},
  {path : "details/:id", component: DetailsComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    FormationComponent,
    ExperienceComponent,
    ContactComponent,
    DetailsComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      CVRoutes,
      { useHash: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
