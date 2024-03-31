import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CensusService {
  private apiUrl = '/api/census';

  constructor(private http: HttpClient) {}

  getCensus(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addCensus(record: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, record);
  }

  updateCensus(id: string, record: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, record);
  }

  deleteCensus(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
