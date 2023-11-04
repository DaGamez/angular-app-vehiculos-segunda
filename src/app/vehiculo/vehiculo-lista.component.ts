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
      this.getMarcas(); 
    });
  }

  getMarcas() {
    const marcasSet = new Set<string>();
    console.log(this.vehiculos);
    this.vehiculos.forEach(vehiculo => {
      marcasSet.add(vehiculo.marca);
    });
    this.marcas = Array.from(marcasSet);
  }

  numeroVehiculosMarca(marca: string): number {
    return this.vehiculos.filter(vehiculo => vehiculo.marca === marca).length;
  }

  ngOnInit() {
    this.getVehiculos();
  }



}
