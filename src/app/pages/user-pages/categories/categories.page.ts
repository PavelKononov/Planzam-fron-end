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
    public planList:any;


    constructor(
        private alertController: AlertController,
        private router: Router,
        private modalController: ModalController,
        private plansProvide: PlansProvider
    ) {

    }

    ngOnInit(): void {

    }

    newPlan() {
        console.log('pre load modal');
        this.router.navigate(['/app/new-plan']);

    }
    ionViewWillEnter(){
        this.plansProvide.getAllPlans().then(
            res => {
                this.planList=res['plans'];
            }
        );
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
