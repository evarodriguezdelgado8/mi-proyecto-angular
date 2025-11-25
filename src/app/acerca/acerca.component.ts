import { Component } from '@angular/core';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.scss']
})
export class AcercaComponent {

  contador: number = 0;
  resultado: string="";

  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  }

  actualizarTexto(evento: Event) {
    const inputElement = evento.target as HTMLInputElement;
    this.resultado = inputElement.value;
  }

  opcionSeleccionada: string = '';
  actualizarOpcion(evento: Event) {
    const selectElement = evento.target as HTMLSelectElement;
    this.opcionSeleccionada = selectElement.value;
  }
    
    
}
