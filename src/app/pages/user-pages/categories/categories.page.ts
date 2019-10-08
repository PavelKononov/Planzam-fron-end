import {Component, OnInit} from '@angular/core';
import {AlertController, ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {PlansProvider} from '../../../../providers/plans/plans';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.page.html',
    styleUrls: [
        './categories.page.scss',
        './categories.shell.scss',
        './categories.responsive.scss'
    ]
})
export class CategoriesPage implements OnInit {
    public planList = [
        {
            planName: 'test1',
            captain: ' name',
            categories: ' name',
            invites: 10,
            accept: 0,
        },
        {
            planName: 'test2',
            captain: 'captain name',
            categories: 'category name',
            invites: 10,
            accept: 2,
        },
        {
            planName: 'test3',
            captain: ' name',
            categories: ' name',
            invites: 10,
            accept: 3,
        },
        {
            planName: 'test4',
            captain: 'name',
            categories: ' name',
            invites: 10,
            accept: 5,
        }
    ];

    constructor(
        private alertController: AlertController,
        private router: Router,
        private modalController: ModalController,
        private plansProvide: PlansProvider
    ) {

    }

    ngOnInit(): void {
        this.plansProvide.getAllPlans().then(
            res => {
                console.log(res);
            }
        );
    }

    newPlan() {
        console.log('pre load modal');
        this.router.navigate(['/app/new-plan']);

    }

    /*
    async presentAlertPrompt() {
      const alert = await this.alertController.create({
        header: 'NEW PLAN',
        subHeader:"Set up a new group plan",
        inputs: [
          {
            name: 'planName',
            type: 'text',
            placeholder: 'Plan name'
          },
        ],
        buttons: [
          {
            text: 'START',
            role: 'confirm',
            cssClass: 'success',
            handler: data => {
              console.log(data);
            }
          }

        ]
      });

      await alert.present();
    }
  */
}
