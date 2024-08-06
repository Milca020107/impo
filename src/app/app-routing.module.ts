import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'rights',
    loadChildren: () => import('./rights/rights.module').then( m => m.RightsPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./tutorial/tutorial.module').then( m => m.TutorialPageModule)
  },
  {
    path: 'fame',
    loadChildren: () => import('./fame/fame.module').then( m => m.FamePageModule)
  },
 
 
  {
    path: 'math',
    loadChildren: () => import('./math/math.module').then( m => m.MathPageModule)
  },
 
  
  {
    path: 'prim',
    loadChildren: () => import('./prim/prim.module').then( m => m.PrimPageModule)
  },
 
  {
    path: 'mate',
    loadChildren: () => import('./mate/mate.module').then( m => m.MatePageModule)
  },

 
 
  {
    path: 'suma-fracciones',
    loadChildren: () => import('./suma-fracciones/suma-fracciones.module').then( m => m.SumaFraccionesPageModule)
  },
  {
    path: 'multi-fraccio',
    loadChildren: () => import('./multi-fraccio/multi-fraccio.module').then( m => m.MultiFraccioPageModule)
  },
  {
    path: 'porcentaje',
    loadChildren: () => import('./porcentaje/porcentaje.module').then( m => m.PorcentajePageModule)
  },
  {
    path: 'regla3',
    loadChildren: () => import('./regla3/regla3.module').then( m => m.Regla3PageModule)
  },
  {
    path: 'inversa',
    loadChildren: () => import('./inversa/inversa.module').then( m => m.InversaPageModule)
  },
  {
    path: 'circulo',
    loadChildren: () => import('./circulo/circulo.module').then( m => m.CirculoPageModule)
  },
  {
    path: 'promedio',
    loadChildren: () => import('./promedio/promedio.module').then( m => m.PromedioPageModule)
  },
  {
    path: 'ecuaciones',
    loadChildren: () => import('./ecuaciones/ecuaciones.module').then( m => m.EcuacionesPageModule)
  },
  {
    path: 'pitagora',
    loadChildren: () => import('./pitagora/pitagora.module').then( m => m.PitagoraPageModule)
  },
  {
    path: 'cuadraticas',
    loadChildren: () => import('./cuadraticas/cuadraticas.module').then( m => m.CuadraticasPageModule)
  },
  {
    path: 'sistema-ec',
    loadChildren: () => import('./sistema-ec/sistema-ec.module').then( m => m.SistemaEcPageModule)
  },
  {
    path: 'arbol',
    loadChildren: () => import('./arbol/arbol.module').then( m => m.ArbolPageModule)
  },
  {
    path: 'jerarquia',
    loadChildren: () => import('./jerarquia/jerarquia.module').then( m => m.JerarquiaPageModule)
  },
  {
    path: 'numnat',
    loadChildren: () => import('./numnat/numnat.module').then( m => m.NumnatPageModule)
  },
  {
    path: 'angulo',
    loadChildren: () => import('./angulo/angulo.module').then( m => m.AnguloPageModule)
  },
  {
    path: 'simetria',
    loadChildren: () => import('./simetria/simetria.module').then( m => m.SimetriaPageModule)
  },
  {
    path: 'cartesiano',
    loadChildren: () => import('./cartesiano/cartesiano.module').then( m => m.CartesianoPageModule)
  },
  {
    path: 'figuras',
    loadChildren: () => import('./figuras/figuras.module').then( m => m.FigurasPageModule)
  },
  {
    path: 'areas',
    loadChildren: () => import('./areas/areas.module').then( m => m.AreasPageModule)
  },
  
 
 
  {
    path: 'vol-cil',
    loadChildren: () => import('./vol-cil/vol-cil.module').then( m => m.VolCilPageModule)
  },
  {
    path: 'volumen-rect',
    loadChildren: () => import('./volumen-rect/volumen-rect.module').then( m => m.VolumenRectPageModule)
  },
  {
    path: 'area-tria',
    loadChildren: () => import('./area-tria/area-tria.module').then( m => m.AreaTriaPageModule)
  },
  {
    path: 'sumarest',
    loadChildren: () => import('./sumarest/sumarest.module').then( m => m.SumarestPageModule)
  },
 
  {
    path: 'probabilidad',
    loadChildren: () => import('./probabilidad/probabilidad.module').then( m => m.ProbabilidadPageModule)
  },
  {
    path: 'pictograma',
    loadChildren: () => import('./pictograma/pictograma.module').then( m => m.PictogramaPageModule)
  },
  {
    path: 'multydiv',
    loadChildren: () => import('./multydiv/multydiv.module').then( m => m.MultydivPageModule)
  },
  {
    path: 'monomios',
    loadChildren: () => import('./monomios/monomios.module').then( m => m.MonomiosPageModule)
  },
 
  {
    path: 'unimed',
    loadChildren: () => import('./unimed/unimed.module').then( m => m.UnimedPageModule)
  },
  {
    path: 'numsign',
    loadChildren: () => import('./numsign/numsign.module').then( m => m.NumsignPageModule)
  },
  {
    path: 'fracciocompa',
    loadChildren: () => import('./fracciocompa/fracciocompa.module').then( m => m.FracciocompaPageModule)
  },
 
  {
    path: 'factorizar',
    loadChildren: () => import('./factorizar/factorizar.module').then( m => m.FactorizarPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
