import {Component, OnInit} from '@angular/core';
import {ModalController, NavController, NavParams} from '@ionic/angular';
import {MapsPage} from '../maps/maps.page';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Storage} from '@ionic/storage';
import {PlansProvider} from '../../../../providers/plans/plans';
import {Router} from '@angular/router';

@Component({
    selector: 'app-new-plan',
    templateUrl: './new-plan.page.html',
    styleUrls: [
        './new-plan.page.scss'],
})
export class NewPlanPage implements OnInit {
    public step = 1;
    public planName = '';
    public tab = 1;
    public accardion = 0;
    public planForm = {
        name: '',
        date: '',
        user_id: '',
        events:[]
    };
    public eventForm =
        {
            category_name: '',
            second_name: '',
            lat: '',
            lng: '',
            radius: '',
            date: '',
        };
    public events = [];
    private user:any;
    public sortTypes = [
        {
            name: 'Cultural / Arts',
            types: [
                {
                    id: 1,
                    name: 'Gallery',
                },
                {
                    id: 2,
                    name: 'Museum',
                }
            ]
        }, {
            name: 'Eating & Drinking',
            types: [
                {
                    id: 1,
                    name: 'Bar',

                }, {
                    id: 2,
                    name: 'Pub',

                }, {
                    id: 3,
                    name: 'Restaurant',

                }]
        }, {
            name: 'Dancing',
            types: [
                {
                    id: 1,
                    name: 'Club',

                }, {
                    id: 2,
                    name: 'Salsa',

                }]
        }, {
            name: 'Sports & leisure',
            types: [
                {
                    id: 1,
                    name: 'Badminton',

                },
                {
                    id: 2,
                    name: 'Football',

                }]
        },
    ];
    public socialPeople = [
        {
            name: 'Planzam',
            types: [
                {
                    id: 1,
                    name: 'contact 1',

                },
                {
                    id: 2,
                    name: 'contact 2',

                }]
        },
        {
            name: 'Facebook',
            types: [
                {
                    id: 1,
                    name: 'contact 1',

                },
                {
                    id: 2,
                    name: 'contact 2',

                }]
        },
        {
            name: 'Twitter',
            types: [
                {
                    id: 1,
                    name: 'contact 1',

                },
                {
                    id: 2,
                    name: 'contact 2',

                }]
        },
        {
            name: 'Instagram',
            types: [
                {
                    id: 1,
                    name: 'contact 1',

                },
                {
                    id: 2,
                    name: 'contact 2',

                }]
        },
        {
            name: 'Phonebook',
            types: [
                {
                    id: 1,
                    name: 'contact 1',

                },
                {
                    id: 2,
                    name: 'contact 2',

                }, {
                    id: 3,
                    name: 'contact 3',

                }, {
                    id: 4,
                    name: 'contact 4',

                }, {
                    id: 5,
                    name: 'contact 5',

                }, {
                    id: 6,
                    name: 'contact 6',

                }, {
                    id: 7,
                    name: 'contact 7',

                }]
        },

    ];
    acc = [
        {
            name: 'non-cheked'
        },
        {
            name: 'non-cheked'
        },
        {
            name: 'non-cheked'
        }
    ];

    constructor(private navCtrl: NavController, public modal: ModalController, private _fb: FormBuilder, private storage: Storage, private plansProvide:PlansProvider,private router:Router
    ) {
        this.storage.get('user').then(user=>{
            this.user=user;
        })
        this.createPlansForm();
        this.createEventForm();
    }

    switchAccordion(i) {
        this.accardion = this.accardion == i ? this.accardion = 0 : this.accardion = i;
    }

    ngOnInit(): void {

    }

    dissmis() {
        this.modal.dismiss({dimiss: true});
    }

    async openMap() {
        console.log(this.eventForm);
        console.log('pre load modal');
        const modal = await this.modal.create({
            component: MapsPage
        });
        modal.onDidDismiss().then(data => {
            if (data.data.location && data.data.location) {
                this.eventForm.lat = data.data.location.lat;
            }
            this.eventForm.lng = data.data.location.lng;

        });
        return await modal.present();

    }

    createEventForm() {
        this.eventForm =
            {
                category_name: '',
                second_name: '',
                lat: '',
                lng: '',
                radius: '',
                date: '',
            };

    }

    createPlansForm() {
        this.planForm = {
            name: '',
            date: '',
            user_id: '',
            events:[]
        };
    }

    selectType(event, i) {
        this.eventForm.category_name = this.sortTypes[i].name;
        this.eventForm.second_name = event.detail.value;
        this.step = 3;
    }

    addEvent() {
        this.events.push(this.eventForm);
        this.planForm.date=this.eventForm.date;
        this.createEventForm();
        this.step = 2;
    }

    createForm() {
        this.planForm.user_id=this.user.id;
        this.planForm.events=this.events;
        this.plansProvide.createPlan(this.planForm ).then(res=>{
            this.router.navigate(['/app/categories'])
        })
    }
}
