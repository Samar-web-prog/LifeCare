import {Time} from '@angular/common';
import DateTimeFormat = Intl.DateTimeFormat;
import {User} from './user';
import {Doctor} from './doctors';

export class Rendezvous{
  id: number ;
  nompatient: string;
  prenompatient: string;
  dateRendezvous: Date;
  description: string;
  docteur: Doctor;
  etatRendezvous: string;
  user: User;
  date: Date;
  jour: string;
  temp: string;
  message:string;


}
