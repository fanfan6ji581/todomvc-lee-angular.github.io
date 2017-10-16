import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth, AngularFireAuthProvider } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMsg = '';

  constructor(public afAuth: AngularFireAuth,
    private authService: AuthService,
    private router: Router) {

  }

  ngOnInit() {
  }




  onLoginFacebook(formData) {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(
      (resp) => {
        console.log(resp);
      }).catch(
      (err) => {
        console.log(err);
        // this.error = err;
      });
  }

  onLoginGoogle(formData) {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      (resp) => {
        console.log(resp);
      }).catch(
      (err) => {
        console.log(err);
        // this.error = err;
      });
  }


  onLogin(formData) {
    if (formData.valid) {
      this.errorMsg = '';

      this.afAuth.auth.signInWithEmailAndPassword(formData.value.email, formData.value.password).then(
        (resp) => {
          this.authService.setLoginUser(resp);
          this.router.navigate(['todo-list']);
        }).catch(
        (err) => {
          this.errorMsg = err.message;
        });
    }

  }

  onSignup(formData) {
    if (formData.valid) {
      this.errorMsg = '';

      this.afAuth.auth.createUserWithEmailAndPassword(formData.value.email, formData.value.password).then(
        (resp) => {
          this.authService.setLoginUser(resp);
          this.router.navigate(['todo-list']);
        }).catch(
        (err) => {
          this.errorMsg = err.message;
        });
    }
  }

}
