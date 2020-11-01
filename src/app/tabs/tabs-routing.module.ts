import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [{
  path: '',
  component: TabsPage,
  children: [
    {
      path: 'inicio',
      loadChildren: () => import('../inicio/tab1.module').then(m => m.Tab1PageModule)
    },
    {
      path: 'perfil',
      loadChildren: () => import('../perfil/tab3.module').then(m => m.Tab3PageModule)
    },
    {
      path: 'buscar',
      loadChildren: () => import('../buscar/buscar.module').then(m => m.BuscarPageModule)
    },
    {
      path: '',
      redirectTo: '/tabs/inicio',
      pathMatch: 'full'
    }
  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
