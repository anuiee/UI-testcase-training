import { Routes } from '@angular/router';
import { BxDisplayComponent } from './bx-widget/organism/bx-display/bx-display.component';
import { LayoutComponent } from './bx-layout/layout/layout.component';

export const routes: Routes = [

    { 
        path: '', 
        component:LayoutComponent
    },
    { 
            path: 'display', 
            component:BxDisplayComponent 
    }
   
];
