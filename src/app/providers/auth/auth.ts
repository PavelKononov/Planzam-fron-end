
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

// import {Storage} from '@ionic/Storage';


@Injectable()

export class AuthProvider {
    constructor(
        public http: HttpClient,
        private storage: Storage,
    ) {
    }


    public logIn(data) {
        return new Promise(resolve => {
            this.http.post('/api/auth/login', data).subscribe(res => {
                this.storage.set('user', {'user':'test_user'}).then(() => {



                });

            });
        })

    }

}
