import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuLeftComponent } from './menu-left/menu-left.component';

// 路由Module
import {RoutesModule} from './routing/routes.module';

// primeNG
import {ButtonModule, PanelMenuModule, SidebarModule, DialogModule, InputTextModule, FileUploadModule, GrowlModule} from 'primeng/primeng';
import { ArticlesComponent } from './articles/articles.component';
import { JavascriptComponent } from './articles/javascript/javascript.component';
import { DjlMsgComponent } from './djl-msg/djl-msg.component';
import { SealScrollDirective } from './shared/directive/seal-scroll.directive';
import { DjlUploadComponent } from './shared/djl-upload/djl-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuLeftComponent,
    ArticlesComponent,
    JavascriptComponent,
    DjlMsgComponent,
    SealScrollDirective,
    DjlUploadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutesModule,
    FormsModule,
    HttpModule,
    ButtonModule,
    PanelMenuModule,
    SidebarModule,
    DialogModule,
    InputTextModule,
    FileUploadModule,
    GrowlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
