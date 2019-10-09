import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Storage} from '@ionic/storage';


@Injectable()

export class PlansProvider {
    constructor(
        public http: HttpClient,
        private storage: Storage,
    ) {
    }

    public getAllPlans() {
        return new Promise(resolve => {
            console.log('get all plans');
            this.http.get('/api/plans/').subscribe(res => {
                return resolve(res);
            });
        });
    }

    public createPlan(data) {
        return new Promise(resolve => {
            this.http.post('/api/plans/', data).subscribe(res => {
                return resolve(res);
            });
        });
    }

}
