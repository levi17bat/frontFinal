import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {
loggin = {
  nick: '', 
  password: ''
}; 
  constructor(
    private accountService: AccountService, 
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    try{
      const result = await this.accountService.loggin(this.loggin); 
      console.log(`Loggin efetuado ${result}`); 
      this.router.navigate(['']); 
    }catch(error){
      console.log(error); 
    }
  }

}
