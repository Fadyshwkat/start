import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { PortofolioComponent } from '../portofolio/portofolio.component';
import { ContactComponent } from '../contact/contact.component';
import { NotFoundComponent } from '../not-found/not-found.component';

export const routes: Routes = [
    {path:'' ,  component:HomeComponent , title:'Home'},
    {path:'home' , component:HomeComponent , title:'Home'},
    {path:'about' , component:AboutComponent , title:'About'},
    {path:'portfolio' , component:PortofolioComponent , title:'Portfolio'},
    {path:'contact' , component:ContactComponent , title:'Contact'},
    {path:'**' , component:NotFoundComponent , title:'Not Found'},

];
