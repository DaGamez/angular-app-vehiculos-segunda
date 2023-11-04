import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { VehiculoListaComponent } from './vehiculo-lista.component';
import { HttpClientModule } from '@angular/common/http';
import { Vehiculo } from './vehiculo';
import { VehiculoService } from './vehiculo.service';


describe('VehiculoListaComponent', () => {
    let component: VehiculoListaComponent;
    let fixture: ComponentFixture<VehiculoListaComponent>;
    let debug: DebugElement;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientModule],
        declarations: [VehiculoListaComponent],
      }).compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(VehiculoListaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    beforeEach(() => {
      fixture = TestBed.createComponent(VehiculoListaComponent);
      component = fixture.componentInstance;
  
      for (let i = 0; i < 3; i++) {
        const id = faker.number.int();
        const marca = faker.lorem.sentence();
        const linea = faker.lorem.sentence();
        const referencia = faker.lorem.sentence();
        const modelo = faker.number.int();
        const kilometraje = faker.number.int();
        const color = faker.lorem.sentence();       
        const imageUrl = faker.image.url();
        
        
        const vehiculo = new Vehiculo(id, marca, linea, referencia, modelo, kilometraje, color, imageUrl);
        component.vehiculos.push(vehiculo);

      }
      fixture.detectChanges();
      debug = fixture.debugElement;
    });

    
    
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should have a table with header', () => {
      const table = debug.query(By.css('[test-id="table"]'));
      expect(table).toBeTruthy();

      const header = table.query(By.css('[test-id="table-header"]'));
      expect(header).toBeTruthy();
    });

    it('should have 3 rows in the table', () => {
      const table = debug.query(By.css('[test-id="table"]'));
      expect(table).toBeTruthy();

      const rows = table.queryAll(By.css('[test-id="table-row"]'));
      expect(rows.length).toBe(3);
    });
    
    

  });
