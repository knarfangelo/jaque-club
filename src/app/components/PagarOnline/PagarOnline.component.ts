import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { RadioButtonModule } from 'primeng/radiobutton';


@Component({
  selector: 'app-pagar-online',
  imports: [CommonModule, FormsModule, DialogModule, InputTextModule, ButtonModule, RadioButtonModule],
  templateUrl: './PagarOnline.component.html',
  styleUrl: './PagarOnline.component.scss',
})
export class PagarOnlineComponent {
  modalVisible = false;
  infoZonaVisible = false;
  pagoDialogVisible = false;
  zonaInfo: any = null; // Zona temporal para mostrar en el dialog


  @Input() precioProducto: number = 160; // Precio recibido desde otro componente
  total: number = this.precioProducto;   // Total inicial (producto + envío)
  mostrarTotal: boolean = true;          // Para ocultar total si es zona 3

  zona1 = {
    label: 'Zona 1',
    precioEnvio: 8,
    distritos: ['SAN ISIDRO','MIRAFLORES','BARRANCO','SANTIAGO DE SURCO','SURQUILLO','JESÚS MARÍA','LA MOLINA','LINCE','MAGDALENA','CERCADO DE LIMA','EL AGUSTINO (NO ZONA ROJA)','LA VICTORIA','PUEBLO LIBRE','RIMAC','SAN BORJA','SAN JUAN DE LURIGANCHO','SAN LUIS','SAN MIGUEL','SANTA ANITA','SALAMANCA','ATE','BREÑA']
  };

  zona2 = {
    label: 'Zona 2',
    precioEnvio: 10,
    distritos: ['ATE','BELLAVISTA','CALLAO','CARABAYLLO','CARMEN DE LA LEGUA','COMAS','CHORRILLOS','EL MARQUEZ - CALLAO','HUAYCAN','INDEPENDENCIA','LOS OLIVOS','LA PERLA','LA PUNTA','PUENTE PIEDRA','SAN JUAN DE MIRAFLORES','SAN MARTÍN DE PORRES','SANTA CLARA - ATE','VENTANILLA','VILLA EL SALVADOR','VILLA MARIA DEL TRIUNFO']
  };

  zona3 = {
    label: 'Otro / Provincia',
    precioEnvio: 0, // el precio será acordado
    distritos: ['Algún otro distrito O PROVINCIA (BAJO SHALOM) consultar con nuestro asesor por Whatsapp ']
  };
  zona4 = {
    label: 'Recojo en tienda (Gratis)',
    precioEnvio: 0, // el precio será acordado
    distritos: ['Av conquistadores 941 san Isidro']
  };

  zonaSeleccionada = this.zona1;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['precioProducto']) {
      this.calcularTotal();
    }
  }

  abrirModal() {
    this.modalVisible = true;
    this.calcularTotal();
  }


abrirInfoZona(zona: any) {
  this.zonaInfo = zona;     // Guardamos la zona que queremos mostrar
  this.infoZonaVisible = true; // Abrimos el diálogo
}

  abrirPagoDialog() {
    this.calcularTotal();
    this.pagoDialogVisible = true;
  }

  seleccionarZona(zona: any) {
    this.zonaSeleccionada = zona;
    this.calcularTotal();
  }

  calcularTotal() {
    if (this.zonaSeleccionada === this.zona3) {
      this.mostrarTotal = false;
    } else {
      this.mostrarTotal = true;
      this.total = this.precioProducto + (this.zonaSeleccionada.precioEnvio || 0);
    }
  }
}
