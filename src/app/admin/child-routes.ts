import { ProduitsComponent } from './produits/produits.component';
import { FournisseursComponent } from './fournisseurs/fournisseurs.component';
import { CommandesComponent } from './commandes/commandes.component';
import { PayementsComponent } from './payements/payements.component';
import { ClientsComponent } from './clients/clients.component';
import { PromotionsComponent } from './promotions/promotions.component';

export const childRoutes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    data: { icon: 'dashboard', text: 'Dashboard' },
  },
  {
    path: 'produits',
    component: ProduitsComponent,
    data: { icon: 'bar_chart', text: 'Produits' },
  },

  {
    path: 'commandes',
    component: CommandesComponent,
    data: { icon: 'assignment', text: 'Commandes' },
  },

  {
    path: 'clients',
    component: ClientsComponent,
    data: { icon: 'code', text: 'Clients' },
  },
];
