import { Component, OnInit } from '@angular/core';

import { LoginUser } from 'src/app/model/login-user';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUser;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;



  constructor(
    private tokenService: TokenService,
    private authService: AuthService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }


  onLogin(): void{
    this.loginUsuario = new LoginUser(this.nombreUsuario, this.password); 
    this.authService.login(this.loginUsuario).subscribe({
      next: (data) =>{
        this.isLogged = true;

        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        
        window.location.reload();

      }, error: (err) =>{
        this.isLogged = false;
        this.isLogginFail = true;
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);
      }
        
      })
  }


  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }


}
