import {ComplexRoute} from './complex.routes';
import {HomeComponent} from '../home/home.component';

import {JavascriptComponent} from '../articles/javascript/javascript.component';
import {ArticleTmplComponent} from '../article-tmpl/article-tmpl.component';
import {DjlMsgComponent} from '../djl-msg/djl-msg.component';
import {DjlEditorComponent} from '../shared/djl-editor/djl-editor.component';
import {DragTestComponent} from '../drag-test/drag-test.component';
import {DjlMdEditorComponent} from '../shared/djl-md-editor/djl-md-editor.component';
import {WriteArticleComponent} from '../write-article/write-article.component';
import {AboutMeComponent} from '../core/about-me/about-me.component';
import {DjlLoginComponent} from '../core/djl-login/djl-login.component';

export const routes: ComplexRoute[] = [
  {
    path: 'home',
    crIcon: 'fa-home',
    crIsNav: true,
    crName: '首页',
    component: HomeComponent
  },
  {
    path: 'articles',
    crIcon: 'fa-book',
    crName: '我的文章',
    crDisableClick: true,
    crIsNav: true,
    children: [{
      path: 'javascript',
      crName: 'Javascript',
      crUrl: 'articles/javascript',
      crIcon: 'fa-refresh',
      crIsNav: true,
      component: JavascriptComponent
    },
    {
      path: 'css',
      crName: 'CSS',
      crIcon: 'fa-css3',
      crUrl: 'articles/css',
      crIsNav: true,
      component: JavascriptComponent
    },
    {
      path: 'vue',
      crName: 'Vue',
      crIcon: 'fa-vimeo',
      crUrl: 'articles/vue',
      crIsNav: true,
      component: JavascriptComponent
    },
    {
      path: 'angular',
      crName: 'Angular',
      crIcon: 'fa-amazon',
      crUrl: 'articles/angular',
      crIsNav: true,
      component: JavascriptComponent
    },
    {path: '**', redirectTo: 'javascript', pathMatch: 'full'}
  ]},
  {
    path: 'djlMsg',
    crIsNav: false,
    component: DjlMsgComponent
  },
  {
    path: 'aboutMe',
    crName: '关于本人',
    crIcon: 'fa-user',
    crIsNav: true,
    component: AboutMeComponent
  },
  {
    path: 'life',
    crName: '我的生活',
    crIcon: 'fa-coffee',
    crIsNav: true,
    component: JavascriptComponent
  },
  {
    path: 'book',
    crName: '文章模板',
    crIcon: 'fa-book',
    crIsNav: true,
    component: ArticleTmplComponent
  },
  {
    path: 'editor',
    crName: '编辑器',
    crIcon: 'fa-pencil',
    crIsNav: true,
    component: DjlEditorComponent
  },
  {
    path: 'mdEditor',
    crName: 'Markdown编辑器',
    crIcon: 'fa-pencil',
    crIsNav: true,
    component: DjlMdEditorComponent
  },
  {
    path: 'drag',
    crName: '拖拽',
    crIcon: 'fa-arrows-alt',
    crIsNav: true,
    component: DragTestComponent
  },
  {
    path: 'writeArticle',
    crIsNav: false,
    component: WriteArticleComponent
  },
  {
    path: 'login',
    crName: '登录',
    crIsNav: true,
    crIcon: 'fa-arrows-alt',
    component: DjlLoginComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
