import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuLeftComponent } from './menu-left/menu-left.component';

// 路由Module
import {RoutesModule} from './routing/routes.module';

// primeNG
import {ButtonModule, PanelMenuModule, SidebarModule,
  DialogModule, InputTextModule, FileUploadModule,
  GrowlModule, EditorModule, TooltipModule} from 'primeng/primeng';

import { ArticlesComponent } from './articles/articles.component';
import { JavascriptComponent } from './articles/javascript/javascript.component';
import { DjlMsgComponent } from './djl-msg/djl-msg.component';
import { SealScrollDirective } from './shared/directive/seal-scroll.directive';
import { DjlUploadComponent } from './shared/djl-upload/djl-upload.component';
import { ArticleTmplComponent } from './article-tmpl/article-tmpl.component';
import { DjlEditorComponent } from './shared/djl-editor/djl-editor.component';
import { DragTestComponent } from './drag-test/drag-test.component';

import {DragulaModule} from 'ng2-dragula';
import { DjlMdEditorComponent } from './shared/djl-md-editor/djl-md-editor.component';
import { WriteArticleComponent } from './write-article/write-article.component';
import { AboutMeComponent } from './core/about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuLeftComponent,
    ArticlesComponent,
    JavascriptComponent,
    DjlMsgComponent,
    SealScrollDirective,
    DjlUploadComponent,
    ArticleTmplComponent,
    DjlEditorComponent,
    DragTestComponent,
    DjlMdEditorComponent,
    WriteArticleComponent,
    AboutMeComponent
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
    GrowlModule,
    TooltipModule,
    EditorModule,
    DragulaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
