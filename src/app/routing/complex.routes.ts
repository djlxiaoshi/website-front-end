import {Route} from '@angular/router';

export interface ComplexRoute extends Route {
  // 路由名称
  crName?: string;
  // 该路由是否需要添加到导航栏列表
  crIsNav?: boolean;
  // 该路由是否需要添加到 Tab 栏
  crIsTab?: boolean;
  // 该路由对应的 URL
  crUrl?: string;
  // 该路由的图标
  crIcon?: string;
  // 该路由是否可点击
  crDisableClick?: boolean;
  // 重载 Route 的 children 属性
  children?: ComplexRoute[];
  // 是否是管理员
  crOnlyRoot?: boolean;
}
