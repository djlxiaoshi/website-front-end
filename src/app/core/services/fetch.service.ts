import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';

import { IziToastService } from './izitoast.service';

const NProgress = require('nprogress');

@Injectable()
export class FetchService {

  constructor(
    private http: Http,
    private iziToastService: IziToastService
  ) { }

  get (url, params, hasWarning = false): Observable<any> {
    return Observable.create((sub) => {
      const headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      NProgress.start();
      this.http.get(url + this.formatData(params), {
        headers        : headers,
        withCredentials: true
      }).subscribe({
        next: (result) => {
          NProgress.done();
          if (result['error_code'] > 0) {
            sub.next(result.data);
          } else {
            // 错误提示
            if (hasWarning) {
              this.iziToastService.error('Error', result['error_message'] || '返回码小于0');
            }
            sub.error(result);
          }
          sub.complete();
        },
        error: (err) => {
          NProgress.done();
          sub.error(err);
        }
      });
    });
  }

  post (url, params, hasWarning = false): Observable<any> {
    return Observable.create((sub) => {
      const headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      this.http.post(url, params, {
        headers        : headers,
        withCredentials: true
      }).subscribe({
        next: (result) => {
          if (result['error_code'] > 0) {
            sub.next(result.data);
          } else {
            // 错误提示
            if (hasWarning) {

            }
            sub.error(result);
          }
          sub.complete();
        },
        error: (err) => {
          sub.error(err);
        }
      });
    });
  }

  formatData(params) {
    if (typeof params !== 'object' && Array.isArray(params)) {
      console.error('请求参数格式错误');
      return;
    }
    const objNamesList = Object.keys(params);
    let paramsStr = '?';
    paramsStr += objNamesList.map(key => {
      return `${key}=${encodeURIComponent(params[key])}`;
    }).join('&');

    return paramsStr;
  }

}
