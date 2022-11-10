import { Component } from '@angular/core';
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


  constructor(private memberService: MemberService){}

  ngOnInit(): void {
      console.log('On Init ...')
      this.memberService.getMember().subscribe (response => {this.member = response;});
  }

  onSave():void{
    console.log('On save ...')
    this.memberService.updateMember(this.member);
    console.log('On save after ...')
  }
}
