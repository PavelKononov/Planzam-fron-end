import {Component, OnInit} from '@angular/core';
import {ModalController, NavController, NavParams} from '@ionic/angular';
import {MapsPage} from '../../old-pages/maps/maps.page';

@Component({
    selector: 'app-new-plan',
    templateUrl: './new-plan.page.html',
    styleUrls: [
        './new-plan.page.scss'],
})
export class NewPlanPage implements OnInit {
    public step = 1;
    public planName='';
    public tab=1;
   accardion=0;
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
    public socialPeople=[
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

                },{
                    id: 3,
                    name: 'contact 3',

                },{
                    id: 4,
                    name: 'contact 4',

                },{
                    id: 5,
                    name: 'contact 5',

                },{
                    id: 6,
                    name: 'contact 6',

                },{
                    id: 7,
                    name: 'contact 7',

                }]
        },

    ];
acc=[
    {
        name:'non-cheked'
    },
    {
        name:'non-cheked'
    },
    {
        name:'non-cheked'
    }
]

    constructor(private navCtrl: NavController,    public modal: ModalController,
    ) {

    }
    switchAccordion(i){
        this.accardion=this.accardion==i?this.accardion=0:this.accardion=i;
    }

    ngOnInit(): void {
    }

    dissmis(){
        this.modal.dismiss({dimiss:true});
    }
    async openMap(){
        console.log('pre load modal');
        const modal = await this.modal.create({
            component: MapsPage
        });
        return await modal.present();

    }
}
