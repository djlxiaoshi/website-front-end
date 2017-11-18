import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {routes} from './routes.config';

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes),
  ],
  providers: [],
  exports: [RouterModule]
})
export class RoutesModule { }
