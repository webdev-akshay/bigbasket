import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;

  constructor(private fb:FormBuilder, private auth:AuthService,private router:Router){
    this.loginForm=this.fb.group({
      UserName:['', Validators.required],
      UserPassword:['',Validators.required]
    })
  }

  onSubmit(){
   if(this.loginForm.valid){
    const {UserName,UserPassword}=this.loginForm.value;

    this.auth.login(UserName,UserPassword).subscribe((res)=>{
      console.log("login successfully");
      this.router.navigate(['/home'])
    }, (err)=>{
      console.error("login failed", err)
    })
   }
  }
  ngOnInit(): void {

  }
}
