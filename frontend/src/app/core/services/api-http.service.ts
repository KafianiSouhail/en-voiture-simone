import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiHttpService {
  private readonly http = inject(HttpClient);

  public get<T>(url: string, params?: any): Observable<T> {
    return this.http.get<T>(`${environment.baseUrl}${url}`, { params });
  }

  public post<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(`${environment.baseUrl}${url}`, { ...body });
  }

  public put<T>(url: string, body: any): Observable<T> {
    return this.http.put<T>(`${environment.baseUrl}${url}`, { ...body });
  }

  public delete<T>(url: string, params?: any): Observable<T> {
    return this.http.delete<T>(`${environment.baseUrl}${url}`, { params });
  }
}
