import {Component, OnInit} from '@angular/core';
import {Validators, FormGroup, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {MenuController} from '@ionic/angular';
import {Storage} from '@ionic/storage';
import {AuthProvider} from '../../../../providers/auth/auth';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: [
        './login.page.scss'
    ]
})
export class LoginPage implements OnInit {
    loginForm: FormGroup;

    validation_messages = {
        'email': [
            {type: 'required', message: 'Email is required.'},
            {type: 'pattern', message: 'Enter a valid email.'}
        ],
        'password': [
            {type: 'required', message: 'Password is required.'},
            {type: 'minlength', message: 'Password must be at least 5 characters long.'}
        ]
    };

    constructor(
        private storage: Storage,
        public router: Router,
        public menu: MenuController,
        public auth: AuthProvider
    ) {
        this.loginForm = new FormGroup({
            'email': new FormControl('test@test.com', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            'password': new FormControl('', Validators.compose([
                Validators.minLength(5),
                Validators.required
            ]))
        });
    }

    ngOnInit(): void {
        this.menu.enable(false);
    }

    doLogin(): void {
        this.auth.signIn(this.loginForm.value).then(res => {
            console.log(res);
            if (!res['error']) {
                this.router.navigate(['app/categories']);
            }
        });
    }

    goToForgotPassword(): void {
        console.log('redirect to forgot-password page');
    }

    doFacebookLogin(): void {
        console.log('facebook login');
        this.router.navigate(['app/categories']);
    }

    doGoogleLogin(): void {
        console.log('google login');
        this.router.navigate(['app/categories']);
    }

    doTwitterLogin(): void {
        console.log('twitter login');
        this.router.navigate(['app/categories']);
    }
}
