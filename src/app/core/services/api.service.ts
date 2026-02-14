import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ApiRequestOptions {
    headers?: HttpHeaders;
    params?: HttpParams;
    responseType?: 'json' | 'text' | 'blob';
}

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private readonly http = inject(HttpClient);
    private readonly baseUrl = environment.apiBaseUrl;

    get<T>(endpoint: string, options?: ApiRequestOptions): Observable<T> {
        return this.http.get<T>(`${this.baseUrl}/${endpoint}`, {
            headers: options?.headers,
            params: options?.params,
        });
    }

    post<T>(endpoint: string, body: unknown, options?: ApiRequestOptions): Observable<T> {
        return this.http.post<T>(`${this.baseUrl}/${endpoint}`, body, {
            headers: options?.headers,
            params: options?.params,
        });
    }

    put<T>(endpoint: string, body: unknown, options?: ApiRequestOptions): Observable<T> {
        return this.http.put<T>(`${this.baseUrl}/${endpoint}`, body, {
            headers: options?.headers,
            params: options?.params,
        });
    }

    patch<T>(endpoint: string, body: unknown, options?: ApiRequestOptions): Observable<T> {
        return this.http.patch<T>(`${this.baseUrl}/${endpoint}`, body, {
            headers: options?.headers,
            params: options?.params,
        });
    }

    delete<T>(endpoint: string, options?: ApiRequestOptions): Observable<T> {
        return this.http.delete<T>(`${this.baseUrl}/${endpoint}`, {
            headers: options?.headers,
            params: options?.params,
        });
    }
}
