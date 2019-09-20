import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({'Content-Type': 'application/json' }),
  baseUrl: 'http://localhost:8080',
  contextPath: '/spaceApp/v1/space/traverse',
  params: undefined
};
@Injectable({
  providedIn: 'root'
})
export class SpaceService {

  constructor(private httpClient: HttpClient) { }

  getPath(pointA, pointB): Observable<any> {
    HTTP_OPTIONS.params = new HttpParams().set('start', pointA).set('destination', pointB);
    return this.httpClient.get(HTTP_OPTIONS.baseUrl + HTTP_OPTIONS.contextPath, HTTP_OPTIONS);
  }
}
