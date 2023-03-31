import { Component } from '@angular/core';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
	email : string = "";
	password : string = "";

	constructor(private loginService: LoginServiceService){}

	log() {
		let variable = {
			email: this.email,
			password: this.password
		};
		this.loginService.doSomething(variable).then((resultObservable)=>{
			// console.log(e.json());
			return resultObservable;
		}).then((result)=>{
			console.log(result);
		});
	}
}
