import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuLeftComponent } from './menu-left/menu-left.component';

// 路由Module
import {RoutesModule} from './routing/routes.module';

// primeNG
import {ButtonModule, PanelMenuModule, SidebarModule, DialogModule} from 'primeng/primeng';
import { ArticlesComponent } from './articles/articles.component';
import { JavascriptComponent } from './articles/javascript/javascript.component';
import { DjlMsgComponent } from './djl-msg/djl-msg.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuLeftComponent,
    ArticlesComponent,
    JavascriptComponent,
    DjlMsgComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutesModule,
    ButtonModule,
    PanelMenuModule,
    SidebarModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
