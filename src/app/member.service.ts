import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http'
import { Membre } from './membre';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MemberService {

  //readonly API_URL="http://localhost:8080"
  readonly API_URL="https://microservice-3-java-git-angularms3.apps.ocp2.fed.diva.net"
  readonly ENDPOINT_MEMBER_READ = "/bali/services/v1/memberFacade?firstName=NORBERT&lastName=HEUZER"
  readonly ENDPOINT_MEMBER_READ_FIRST_LAST = "/bali/services/v1/memberFacade"
  readonly ENDPOINT_MEMBER_READ2 = "/bali/services/v1/memberPhoneChange?tel="
  readonly ENDPOINT_MEMBER_UPDATE = "/bali/services/v1/putChange"

  constructor(private httpClient : HttpClient) { 

  }

  public getMember(): Observable<Membre>{
    return this.httpClient.get<Membre>(this.API_URL+this.ENDPOINT_MEMBER_READ)
  }

  public getMemberByFirstnameAndLastName(firstname:string,lastname:string): Observable<Membre>{
    console.log(this.API_URL+this.ENDPOINT_MEMBER_READ_FIRST_LAST + firstname + '&='+lastname)
    let queryParams = new HttpParams();
    queryParams = queryParams.append("firstName",firstname);
    queryParams = queryParams.append("lastName",lastname);
    return this.httpClient.get<Membre>(this.API_URL+this.ENDPOINT_MEMBER_READ_FIRST_LAST,{params:queryParams})
  }

  public updateMember(membre :Membre): Observable<Membre>{
    console.log('update member ...' + membre.id + " " + membre.telephone)
    /*console.log('lien: ' + this.API_URL+this.ENDPOINT_MEMBER_UPDATE+membre.telephone +  "&=" + membre.id)
    return this.httpClient.put<Membre>(this.API_URL+this.ENDPOINT_MEMBER_UPDATE+membre.telephone +  "&=" + membre.id)*/
    console.log('lien: ' + this.API_URL+this.ENDPOINT_MEMBER_READ2+ membre.telephone + "&id=" + membre.id)
    return this.httpClient.get<Membre>(this.API_URL+this.ENDPOINT_MEMBER_READ2+ membre.telephone + "&id=" + membre.id)
    console.log('after put')
  }
}
