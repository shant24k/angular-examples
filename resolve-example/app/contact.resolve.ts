import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ContactsService } from './contacts.service';

@Injectable()
export class ContactResolve implements Resolve<any> {
  
  constructor(private contactsService: ContactsService) {}
  
  resolve(route: ActivatedRouteSnapshot) {
    //debugger;
    return this.contactsService.getContact(route.params['id']);
  }
}