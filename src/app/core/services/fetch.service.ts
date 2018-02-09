import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';

import { IziToastService } from './izitoast.service';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

import {environment} from '../../../environments/environment';

const NProgress = require('nprogress');

@Injectable()
export class FetchService {
  private apiUrl = environment['apiUrl'];
  constructor(
    private http: HttpClient,
    private iziToastService: IziToastService
  ) { }

  get (url, params, hasWarning = false): Observable<any> {
    return Observable.create((sub) => {
      const _url = this.apiUrl + url;
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      NProgress.start();
      this.http.get(_url + this.formatData(params), {
        headers        : headers,
        withCredentials: true
      }).subscribe({
        next: (res) => {
          NProgress.done();
          if (res['error_code'] >= 0) {
            sub.next(res['data']);
          } else {
            // 错误提示
            if (hasWarning) {
              this.iziToastService.error('Error', res['message'] || '返回码小于0');
            }
            sub.error(res);
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
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      this.http.post(url, params, {
        headers        : headers,
        withCredentials: true
      }).subscribe({
        next: (res) => {
          if (res['error_code'] > 0) {
            sub.next(res['data']);
          } else {
            // 错误提示
            if (hasWarning) {
              this.iziToastService.error('Error', res['message'] || '返回码小于0');
            }
            sub.error(res);
          }
          sub.complete();
        },
        error: (err) => {
          sub.error(err);
        }
      });
    });
  }

  put (url, params, hasWarning = false): Observable<any> {
    return Observable.create((sub) => {
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      this.http.post(url, params, {
        headers        : headers,
        withCredentials: true
      }).subscribe({
        next: (res) => {
          if (res['error_code'] > 0) {
            sub.next(res['data']);
          } else {
            // 错误提示
            if (hasWarning) {
              this.iziToastService.error('Error', res['message'] || '返回码小于0');
            }
            sub.error(res);
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
    let paramsStr = '';
    if (params.length > 0) { paramsStr = '?'; }
    paramsStr += objNamesList.map(key => {
      return `${key}=${encodeURIComponent(params[key])}`;
    }).join('&');

    return paramsStr;
  }

}
