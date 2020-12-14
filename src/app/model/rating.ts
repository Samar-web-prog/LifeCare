import {User} from './user';
import {Doctor} from './doctors';
import {Pharmacy} from './pharmacy';

export class Rating{
  id: number;
  comments: string;
  user: User;
  nomber: number;
  doctor: Doctor;
  pharmacie: Pharmacy;
}
