import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Membre } from './membre';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MemberService {

  readonly API_URL="http://localhost:8080"
  readonly ENDPOINT_MEMBER_READ = "/bali/services/v1/memberFacade?firstName=NORBERT&lastName=HEUZER"
  readonly ENDPOINT_MEMBER_READ2 = "/bali/services/v1/memberPhoneChange?tel="
  readonly ENDPOINT_MEMBER_UPDATE = "/bali/services/v1/"

  constructor(private httpClient : HttpClient) { 

  }

  public getMember(): Observable<Membre>{
    return this.httpClient.get<Membre>(this.API_URL+this.ENDPOINT_MEMBER_READ)
  }

  public updateMember(membre :Membre): Observable<Membre>{
    console.log('update member ...' + membre.id + " " + membre.telephone)
    //return this.httpClient.put<Membre>(this.API_URL+this.ENDPOINT_MEMBER_UPDATE+membre.id,membre)
    return this.httpClient.get<Membre>(this.API_URL+this.ENDPOINT_MEMBER_READ2+ membre.telephone + "&id=" + membre.id)
    console.log('after put')
  }
}
