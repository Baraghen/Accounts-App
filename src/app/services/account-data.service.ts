import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Account } from '../classes/account';

@Injectable({
  providedIn: 'root'
})
export class AccountDataService {

  constructor(private httpClient: HttpClient) { }

  account: Account;

  getAccounts(): Observable<Account[]>{

    return this.httpClient.get<Account[]>('http://localhost:3000/data');

  }

}
