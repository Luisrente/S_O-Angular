import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { proce } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ConsulService {

  constructor(
    private http: HttpClient
  ) { }
  private URL = 'http://localhost:3000';

  getProceso(){
    return this.http.get<proce>(`${this.URL}/proceso/procesos`);
  }
}
