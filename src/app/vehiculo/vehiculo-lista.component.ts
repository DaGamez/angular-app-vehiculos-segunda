import { Component, OnInit } from '@angular/core';
import { Vehiculo } from './vehiculo';
import { VehiculoService } from './vehiculo.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo-lista.component.html',
  styleUrls: ['./vehiculo-lista.component.css']
})
export class VehiculoListaComponent implements OnInit {
  vehiculos: Array<Vehiculo>=[];
  marcas: Array<string>=[];
  marcas2: Array<string>=["a","b","c"];
  
  constructor(private vehiculoService:VehiculoService) { }

  getVehiculos() {
      this.vehiculoService.getVehiculos().subscribe(vehiculos => {
      this.vehiculos = vehiculos;
    });
  }

  getMarcas() {
    const marcasSet = new Set<string>();
    this.vehiculos.forEach(vehiculo => {
      marcasSet.add(vehiculo.marca);
    });
    this.marcas = Array.from(marcasSet);
  }

  ngOnInit() {
    this.getVehiculos();
    this.getMarcas();
  }



}
