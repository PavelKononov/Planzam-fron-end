import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Storage} from '@ionic/storage';


@Injectable()

export class AuthProvider {
    constructor(
        public http: HttpClient,
        private storage: Storage,
    ) {
    }

    public signIn(data) {
        return new Promise(resolve => {
            this.http.post('/auth/login', data).subscribe(res => {
                this.storage.set('user', res).then(() => {

                    return resolve(res);
                });


            });
        });
    }

    public signUp(data) {
        return new Promise(resolve => {
            this.http.post('/auth/signUp', data).subscribe(res => {
                return resolve(res);
            });
        });
    }

}
