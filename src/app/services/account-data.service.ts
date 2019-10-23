import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Account } from '../classes/account';

@Injectable({
  providedIn: 'root'
})
export class AccountDataService {

  constructor(private httpClient: HttpClient) { }

  account: Account;
  apiUrl = 'http://localhost:3000/data';

  filterAccounts(obj?:object):Observable<Account[]>{
    if(obj){

      let params = new HttpParams();
      
      Object.keys(obj).forEach(key=>{
      let keyName = key;
      let value = obj[key];
        
        if (value) {
          if (keyName == 'groupName') {
            keyName = 'group.name';
            params = params.append(keyName, value); 
            
          } else{
            params = params.append(keyName, value);
            
          }          
        }
      })
      
      return this.httpClient.get<Account[]>(`${this.apiUrl}`, {params:params}); 
    } else {
      return this.httpClient.get<Account[]>(`${this.apiUrl}`);
    }
  }
}
