import {Component} from '@angular/core';
import {Plugins} from '@capacitor/core';
import{Storage} from '@ionic/storage';

const {SplashScreen} = Plugins;
import {TranslateService, LangChangeEvent} from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: [
        './side-menu/styles/side-menu.scss',
        './side-menu/styles/side-menu.shell.scss',
        './side-menu/styles/side-menu.responsive.scss',
        'app.component.scss'
    ]
})
export class AppComponent {
    menu = [
        {
            title: 'Navigation',
            subItems: [{
                title: 'My Dashboard',
                url: '/app/categories',
                icon: 'fa-user'
            },
                {
                    title: 'My Profile',
                    url: '/app/user',
                    icon: 'fa-user'
                },
                {
                    title: 'My Plans',
                    url: '/app/categories',
                    icon: 'fa-star'
                },
                {
                    title: 'Invited Plans',
                    url: '/app/categories',
                    icon: 'fa-star'
                },
                {
                    title: 'Contacts',
                    url: '/app/user/friends',
                    class: 'fa-star'
                },
                {
                    title: 'Invites',
                    url: '/app/categories',
                    icon: 'fa-user'
                },
                {
                    title: 'Log Out',
                    url: '/auth/login',
                    icon: 'fa-star'
                },]

        },
        {
            title: 'Get social',
            icon: 'fa-share-alt',
            subItems: [{
                title: 'Call Us',
                url: '/app/categories',
                icon: 'fa-phone-square'
            },
                {
                    title: 'Facebook',
                    url: '/app/categories',
                    icon: 'fa-facebook-square'
                },
                {
                    title: 'Twitter',
                    url: '/app/categories',
                    icon: 'fa-twitter-square'
                },
                {
                    title: 'Google+',
                    url: '/app/categories',
                    icon: 'fa-google-plus-square'
                },]
        }
    ];
  /*  appPages = [
        {
            title: 'Categories',
            url: '/app/categories',
            icon: './assets/sample-icons/side-menu/categories.svg'
        },
        {
            title: 'Profile',
            url: '/app/user',
            icon: './assets/sample-icons/side-menu/profile.svg'
        },
        {
            title: 'Contact Card',
            url: '/contact-card',
            icon: './assets/sample-icons/side-menu/contact-card.svg'
        },
        {
            title: 'Notifications',
            url: '/app/notifications',
            icon: './assets/sample-icons/side-menu/notifications.svg'
        }
    ];
    accountPages = [
        {
            title: 'Log In',
            url: '/auth/login',
            icon: './assets/sample-icons/side-menu/login.svg'
        },
        {
            title: 'Sign Up',
            url: '/auth/signup',
            icon: './assets/sample-icons/side-menu/signup.svg'
        },
        {
            title: 'Tutorial',
            url: '/walkthrough',
            icon: './assets/sample-icons/side-menu/tutorial.svg'
        },
        {
            title: 'Getting Started',
            url: '/getting-started',
            icon: './assets/sample-icons/side-menu/getting-started.svg'
        },
        {
            title: '404 page',
            url: '/page-not-found',
            icon: './assets/sample-icons/side-menu/warning.svg'
        }
    ];*/

    textDir = 'ltr';
    public user: any;

    constructor(
        public translate: TranslateService,
        private storage: Storage
    ) {
        this.storage.get('user').then(user => {
            this.user = user;
        });
        this.initializeApp();
        this.setLanguage();
    }

    async initializeApp() {
        try {
            await SplashScreen.hide();
        } catch (err) {
            console.log('This is normal in a browser', err);
        }
    }

    setLanguage() {
        // this language will be used as a fallback when a translation isn't found in the current language
        this.translate.setDefaultLang('en');

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        this.translate.use('en');

        // this is to determine the text direction depending on the selected language
        // for the purpose of this example we determine that only arabic and hebrew are RTL.
        // this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
        //   this.textDir = (event.lang === 'ar' || event.lang === 'iw') ? 'rtl' : 'ltr';
        // });
    }

}
