import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { IDocumento } from '../interfaces/IDocumento';
import { API_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServicoService {
  constructor(private httpCliente: HttpClient) {}

  findAll(): Observable<IDocumento[]> {
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    let options = {
      headers: httpHeaders,
    };
    return this.httpCliente.get<IDocumento[]>(API_URL, options);
  }

  findById(id?:number): Observable<IDocumento> {
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    let options = {
      headers: httpHeaders,
    };
    return this.httpCliente.get<IDocumento>(`${API_URL}/${id}`, options);
  }

  save(documento:IDocumento):Observable<IDocumento>{
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    let options = {
      headers: httpHeaders,
    };
    return this.httpCliente.post<IDocumento>(API_URL,documento,options)
    .pipe(take(1));
  }

  update(documento:IDocumento):Observable<IDocumento>{
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    let options = {
      headers: httpHeaders,
    };
    return this.httpCliente.put<IDocumento>(`${API_URL}/${documento.id}`,documento,options);
  }

  delete(documento:IDocumento):Observable<void>{
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    let options = {
      headers: httpHeaders,
    };
    return this.httpCliente.delete<void>(`${API_URL}/${documento.id}`, options);
  }

}
