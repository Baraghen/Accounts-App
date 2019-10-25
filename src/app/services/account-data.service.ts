import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Account } from '../classes/account';
import { AccountInfo } from '../classes/accountInfo';
import { FullAccount } from '../classes/fullAccount';
import { FilterValues } from '../classes/filterValues';

@Injectable({
  providedIn: 'root'
})
export class AccountDataService {

  constructor(private httpClient: HttpClient) { }

  account: Account;
  accountInfo: AccountInfo;

  accountUrl = 'http://localhost:3000/data';
  infoUrl = 'http://localhost:3000/chargebee';


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
      return this.httpClient.get<Account[]>(`${this.accountUrl}`, {params:params});

    } else {
      return this.httpClient.get<Account[]>(`${this.accountUrl}`);
      
    }
  }
  

  getAccountInfo():Observable<AccountInfo[]>{

    return this.httpClient.get<AccountInfo[]>(`${this.infoUrl}`);
    
  }

  getAllAccountData(obj?:FilterValues):Observable<any>{
    if(obj){
      let paramsAcc = new HttpParams();
      let paramsInfo = new HttpParams();
      
      Object.keys(obj.account).forEach(key=>{

      let keyName = key;
      let value = obj.account[key];

        if (value) {
          if (keyName == 'groupName') {
            keyName = 'group.name';
            paramsAcc = paramsAcc.append(keyName, value); 
          } else{
            paramsAcc = paramsAcc.append(keyName, value);
          }
        }
      })
      Object.keys(obj.info).forEach(key=>{

        let keyName = key;
        let value = obj.info[key];
        if (value) {
            paramsInfo = paramsInfo.append(keyName, value);
        }
      })
      let requestedAccounts = this.httpClient.get<Account[]>(`${this.accountUrl}`, {params:paramsAcc});
      let requestedInfo = this.httpClient.get<AccountInfo[]>(`${this.infoUrl}`, {params:paramsInfo});
  
      return forkJoin([requestedAccounts, requestedInfo]); 

    } else {
      let requestedAccounts = this.httpClient.get<Account[]>(this.accountUrl);
      let requestedInfo = this.httpClient.get<AccountInfo[]>(this.infoUrl);

      return forkJoin([requestedAccounts, requestedInfo]);
    }

  }
}

