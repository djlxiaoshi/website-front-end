import {routes} from '../routing/routes.config';

function buildMenu (routesConfig, _menuList) {
  // 这里是一个递归的写法，以后凡是看见树状的数据结构那就要想到使用递归
  if (routesConfig && routesConfig.length) {
    routesConfig.forEach(config => {
      // 滤掉重定向的选项 {path: '', redirectTo: '/javascript', pathMatch: 'full'}
      if (!config.redirectTo && config.crIsNav) {
        const menu = {};
        if (config.crName) {
          menu['label'] = config.crName;
        }
        if (config.crIcon) {
          menu['icon'] = config.crIcon;
        }

        if (!config['crDisableClick']) {
          if (config.path) {
            menu['routerLink'] = config.crUrl || config.path;  // 优先采用crUrl里面的路径
          }
        }
        if (config.children && config.children.length) {
          menu['items'] = [];
          buildMenu(config.children, menu['items']);
        }

        _menuList.push(menu);
      }
    });
  }

  return _menuList;
}

export default buildMenu(routes, []);

