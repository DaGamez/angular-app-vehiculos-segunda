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

  constructor(private vehiculoService:VehiculoService) { }

  getVehiculos() {
      this.vehiculoService.getVehiculos().subscribe(vehiculos => {
      this.vehiculos = vehiculos;
    });
  }

  ngOnInit() {
    this.getVehiculos();
  }



}
