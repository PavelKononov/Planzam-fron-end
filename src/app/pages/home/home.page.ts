import {Component, OnInit, } from '@angular/core';

import { MenuController} from '@ionic/angular';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'app-home', templateUrl: './home.page.html',
    styleUrls: [
        './home.page.scss',
        './home.shell.scss',
        './home.responsive.scss'
    ]
})
export class HomePage implements OnInit {
    slidesOptions: any = {
        zoom: {
            toggle: false // Disable zooming to prevent weird double tap zomming on slide images
        }
    };

    constructor(public menu: MenuController,
                private router: Router,
                private storage: Storage) {
        this.storage.get('start').then(start => {
            start && router.navigate(['/auth/login']);
        });
    }

    ngOnInit(): void {
        this.menu.enable(false);
    }

    selectRouting(route) {
        this.storage.set('start', 'app started').then(res => {
            this.router.navigate(['/auth/' + route]);
        });
    }
}
