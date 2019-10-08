import {IonicModule} from '@ionic/angular';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ComponentsModule} from '../../../components/components.module';

import {NewPlanPage} from './new-plan.page';
import {MapsPage} from '../../old-pages/maps/maps.page';

const categoriesRoutes: Routes = [
    {
        path: '',
        component: NewPlanPage
    }
];

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild(categoriesRoutes),
        ComponentsModule,
        ReactiveFormsModule
    ],
    declarations: [NewPlanPage, MapsPage],
    entryComponents: [MapsPage]
})
export class NewPlanModule {
}
