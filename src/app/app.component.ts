import { Component, SimpleChanges, OnChanges, Input } from '@angular/core';
import { MemberService } from './member.service';
import { OnInit } from '@angular/core';
import { Membre } from './membre';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MemberService]
})
export class AppComponent implements OnInit {
  title = 'member-frontend';
  member :Membre;
  lastname : string;
  firstname: string;
  modified:boolean = false;

  constructor(private memberService: MemberService){}

  ngOnInit(): void {
      console.log('On Init ...')
     // this.memberService.getMember().subscribe (response => {this.member = response;});
  }

  ngOnChanges(changements: SimpleChanges) {
    //Insérez votre code de détection du changement ici
    console.log(changements); //Valeur actuelle du libellé (après le changement)
  }

  onChangePhone(){
    console.log(this.member.telephone) ;
  }

  onSave():void{
    console.log('On save ...')
    this.memberService.updateMember(this.member).subscribe (response => {this.member = response;});
    console.log('On save after ...')
    this.modified=true;
  }

  onChangeMember(){
    this.memberService.getMemberByFirstnameAndLastName(this.firstname,this.lastname).subscribe (response => {this.member = response;});
  }
}
