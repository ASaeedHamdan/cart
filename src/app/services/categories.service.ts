import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor( private db:AngularFireDatabase) { }
  getcategories(){
    return this.db.list('/categories').valueChanges();
  }
}
