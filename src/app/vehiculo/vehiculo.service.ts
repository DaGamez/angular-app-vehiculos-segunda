import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Vehiculo } from './vehiculo';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private apiUrl = environment.baseUrl;
constructor(private http:HttpClient) { }

getVehiculos(): Observable<Vehiculo[]> {
  return this.http.get<Vehiculo[]>(this.apiUrl);
}

}
