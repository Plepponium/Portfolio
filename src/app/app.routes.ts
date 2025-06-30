import { Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { MainContentComponent } from './main-content/main-content.component';
import { PrivacyComponent } from './privacy/privacy.component';

export const routes: Routes = [
    {path: '', component: MainContentComponent},
    {path: 'imprint', component: ImprintComponent},
    {path: 'privacy', component: PrivacyComponent},
];
