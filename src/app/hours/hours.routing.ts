import { Routes, RouterModule } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';

const hoursRoutes: Routes = [
  {
    path: 'hours',
    children: [
      { path: '', component: OverviewComponent }
    ]
  }
];

export const HoursRouting = RouterModule.forChild(hoursRoutes);
