import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-pagar-online',
  imports: [CommonModule, FormsModule, DialogModule, InputTextModule, ButtonModule],
  templateUrl: './PagarOnline.component.html',
  styleUrl: './PagarOnline.component.scss',
})
export class PagarOnlineComponent {


  modalVisible: boolean = false;

  // Formulario
  billing: any = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    street: '',
    city: '',
    state: '',
    country: 'PE',
    postalCode: '',
    documentType: 'DNI',
    document: ''
  };

  // Validación simple
  formValid(): boolean {
    const b = this.billing;
    return b.firstName && b.lastName && b.email && b.phoneNumber &&
           b.street && b.city && b.state && b.country &&
           b.postalCode && b.documentType && b.document ? true : false;
  }

  abrirModal() {
    this.modalVisible = true;
  }

  cerrarModal() {
    this.modalVisible = false;
  }

  // Preparar objeto iziConfig para enviar a Izipay
  generarIziConfig() {
    if (!this.formValid()) {
      alert('Complete todos los campos obligatorios.');
      return;
    }

    const iziConfig = {
      config: {
        transactionId: 'GENERAR_UNICO_ID',
        action: 'pay',
        merchantCode: '{MERCHANT_CODE}',
        order: {
          orderNumber: 'GENERAR_ORDER_NUMBER',
          currency: 'PEN',
          amount: 0, // Asignar monto real
          processType: 'AT',
          merchantBuyerId: '{MERCHANT_CODE}',
          dateTimeTransaction: new Date().toISOString()
        },
        billing: { ...this.billing },
        shipping: { ...this.billing } // si el comprador recibe, shipping = billing
      }
    };

    console.log('Objeto iziConfig listo para Izipay:', iziConfig);
    // Aquí llamas al SDK de Izipay
  }


}
