import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponentComponent} from '../app/home-component/home-component.component';
import {DoctorListComponentComponent} from '../app/doctor-list-component/doctor-list-component.component';
import { InscriptioncomponentComponent } from './inscriptioncomponent/inscriptioncomponent.component';
import { DoctordetailscomponentComponent } from './doctordetailscomponent/doctordetailscomponent.component';
import {RendezVousListComponent} from './rendez-vous-list/rendez-vous-list.component';
import { AuthGuardGuard } from './auth-guard.guard';
import {LoginComponentComponent} from './login-component/login-component.component';
import {ProfilecomponentComponent} from './profilecomponent/profilecomponent.component';
import {EditComponentComponent} from './edit-component/edit-component.component';
import {PharmacieslistComponent} from './pharmacieslist/pharmacieslist.component';
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponentComponent},
  {path: 'doctors', component: DoctorListComponentComponent},
  {path: 'register' , component: InscriptioncomponentComponent},
  {path: 'doctor_details/:id', component: DoctordetailscomponentComponent},
    //,canActivate: [AuthGuardGuard]},
  {path: 'rendezvouslist/:id', component: RendezVousListComponent},
  {path: 'login' , component: LoginComponentComponent},
  {path: 'profil' , component: ProfilecomponentComponent},
  {path: 'Edit' , component: EditComponentComponent},
  {path: 'pharmacies' , component: PharmacieslistComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
