import {Route} from '@angular/router';

export interface ComplexRoute extends Route {
  // 路由名称
  crName?: string;
  // 该路由是否需要添加到导航栏列表
  crIsNav?: boolean;
  // 该路由是否需要添加到 Tab 栏
  crIsTab?: boolean;
  // 该路由对应的 URL(要包含父级路径)
  crUrl?: string;
  // 该路由的图标
  crIcon?: string;
  // 该路由是否可点击(为TRUE时，不会设置routerLink，详见build.menu.ts)
  crDisableClick?: boolean;
  // 重载 Route 的 children 属性
  children?: ComplexRoute[];
  // 是否是管理员
  crOnlyRoot?: boolean;
}
