import {Storage} from '@ionic/storage';
import {Subject} from 'rxjs';
//import {API_URL} from './../../app/app.constants';
import {AuthProvider} from './../../providers/auth/auth';


import {
    HttpClient,
    HttpErrorResponse,
    HttpHandler,
    HttpInterceptor,
    HttpRequest
} from '@angular/common/http';

import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {catchError, finalize, tap} from 'rxjs/operators';

enum ErrorsType401 {
    expiredToken = 'Expired token.',
    invalidToken = 'Invalid token.',
    requiredToken = 'Token is required',
    notAbleRefreshToken = 'not able to refresh token'
}

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    public isRefreshingToken: boolean = false;
    public tokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    public errorsStream: Subject<string> = new Subject();

    constructor(
        public http: HttpClient,
        private auth: AuthProvider,
        private storage: Storage,
        public jwtHelper: JwtHelperService
    ) {
        //  setInterval(this.auth.refreshToken().subscribe(t=>{console.log(t)}), 35000)
    }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
        const authReq = req.clone({
            //url: API_URL + req.url,
             url: 'http://planzam-dev.eu-west-2.elasticbeanstalk.com' + req.url,
          //  url: 'http://localhost:3015' + req.url,

        });
        return next.handle(authReq);
        /* .pipe(
         tap(() => {
           //  this.loader.show();
         }),
         finalize(() => {
            // this.loader.hide();
         }),
         catchError(error => {
             if (error instanceof HttpErrorResponse) {
               /!*  switch ((error as HttpErrorResponse).status) {
                     case 400:
                         this.handle400Error(error);
                         return Observable.throw(error);
                     case 401:
                         this.handle401Error(error);
                         return Observable.throw(error);
                     case 500:
                         return Observable.throw(error);
                     default:*!/
                         return throwError(error);
                // }
             }
         })
     );*/
    }

    public handle400Error(error) {
        //  this.toastService.showToast(error.error.message, 'error');
        return Observable.throw(error);
    }

    public handle401Error({error}) {
        if (error.error === ErrorsType401.expiredToken) {
            // this.onExpireToken(error);
        } else if (
            error.error === ErrorsType401.invalidToken ||
            error.error === ErrorsType401.requiredToken ||
            error.error === ErrorsType401.notAbleRefreshToken
        ) {
            this.storage.clear();
            //  this.events.publish('setRootFS', 'SignInPage');
        } else {
            //  this.toastService.showToast(error.error || error.message, 'error');
        }
    }

    /*

        onExpireToken(error) {
            if (!this.isRefreshingToken) {
                this.isRefreshingToken = true;
                this.toastService.showToast('Your session is expired', 'error');
                // Reset here so that the following requests wait until the token
                // comes back from the refreshToken call.
                this.tokenSubject.next(null);
                if (this.platform.is('cordova') && this.platform.is('ios')) {
                    this.touchId
                        .isAvailable()
                        .then(() => {
                            this.touchId.verifyFingerprint('Scan your fingerprint please').then(
                                () => {
                                    //this.refreshTokenAndRedirectToAvailableLessons();
                                   // const subscription = this.auth.logOut().subscribe();
                                   // subscription.add(() => {
                                    //    this.events.publish('setRootFS', 'SignInPage');
                                   // });
                                },
                                () => {
                                  /!*  const subscription = this.auth.logOut().subscribe();
                                    subscription.add(() => {
                                        this.events.publish('setRootFS', 'SignInPage');
                                    });*!/
                                }
                            );
                        })
                        .catch(() => {
                            //this.refreshTokenAndRedirectToAvailableLessons();
                          /!*  const subscription = this.auth.logOut().subscribe();
                            subscription.add(() => {
                                this.events.publish('setRootFS', 'SignInPage');
                            });*!/
                        });
                } else {
                   // this.refreshTokenAndRedirectToAvailableLessons();
                   /!* const subscription = this.auth.logOut().subscribe();
                    subscription.add(() => {
                        this.events.publish('setRootFS', 'SignInPage');
                    });*!/
                }
            } else {
                return this.tokenSubject
                    .filter(token => token != null)
                    .take(1)
                    .do(token => {
                        this.auth.setToken(token);
                    });
            }
        }
    */


}
