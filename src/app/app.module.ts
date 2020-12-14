import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { DoctorcomponentComponent } from './doctorcomponent/doctorcomponent.component';
import { DoctorListComponentComponent } from './doctor-list-component/doctor-list-component.component';
import { InscriptioncomponentComponent } from './inscriptioncomponent/inscriptioncomponent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoctordetailscomponentComponent } from './doctordetailscomponent/doctordetailscomponent.component';
import { RendezVousformComponent } from './rendez-vousform/rendez-vousform.component';
import { RendezVousListComponent } from './rendez-vous-list/rendez-vous-list.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ProfilecomponentComponent } from './profilecomponent/profilecomponent.component';
import { EditComponentComponent } from './edit-component/edit-component.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { PharmacieslistComponent } from './pharmacieslist/pharmacieslist.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { RendezvoususerComponent } from './rendezvoususer/rendezvoususer.component';
import { CommentcomponentComponent } from './commentcomponent/commentcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    DoctorcomponentComponent,
    DoctorListComponentComponent,
    InscriptioncomponentComponent,
    DoctordetailscomponentComponent,
    RendezVousformComponent,
    RendezVousListComponent,
    LoginComponentComponent,
    ProfilecomponentComponent,
    EditComponentComponent,
    PharmacieslistComponent,
    PharmacyComponent,
    RendezvoususerComponent,
    CommentcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
