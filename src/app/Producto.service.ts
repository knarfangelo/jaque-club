import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productos = [
    {
      id: 'loyalty',
      nombre: 'Road To Loyalty',
      imagen: 'pomos/pomo2.webp',
      lineaslogo: 'lineaslogo/lineaslogo2.webp',
      precioOriginal: 200,
      precioOferta: 160,
      color: 'Blanco Hielo',
      descripcion: `Si elegiste este color, elegiste cumplir incluso cuando nadie te mira: es el camino de la constancia. Este color te recuerda que la disciplina diaria es la forma más alta de lealtad: hábitos simples, palabra firme y progreso silencioso. Súmate al Jaque's Club y luce tu Jaque Road to Loyalty con foco y compromiso.`,
      caracteristicas: [
        'Acero inoxidable 18/8; Libre de BPA.',
        'Incluye bombilla que puedes convertir en sorbete',
        'Aislamiento al vacío de doble pared.',
        'Mantiene tus líquidos fríos o calientes por 24 horas',
        'A prueba de fugas.',
        'Puedes usar la tapa como vaso fachero.',
        'Producto apto para el lavavajillas.',
        'Tapón de alta presión',
        'Capacidad: 1.2 lt',
        'Alto: 31 cm',
        'Largo: 11 cm',
        'Ancho: 10 cm',
      ]
    },
    {
      id: 'success',
      nombre: 'Road To Success',
      imagen: 'pomos/pomo3.webp',
      lineaslogo: 'lineaslogo/lineaslogo3.webp',
      precioOriginal: 200,
      precioOferta: 160,
      color: 'Negro',
      descripcion: `Si elegiste este color, elegiste progreso real: es el camino del enfoque y la ejecución. El gráfico de este color muestra una escalera ascendente: así luce el éxito de verdad, avances y correcciones que, repetidos, te llevan más arriba. Este Jaque te recuerda cada acción, aprendizaje y regreso al plan. Únete al Jaque's Club y haz tuyo el Road to Success: menos ruido, más acción.`,
      caracteristicas: [
        'Acero inoxidable 18/8; Libre de BPA.',
        'Incluye bombilla que puedes convertir en sorbete',
        'Aislamiento al vacío de doble pared.',
        'Mantiene tus líquidos fríos o calientes por 24 horas',
        'A prueba de fugas.',
        'Puedes usar la tapa como vaso fachero.',
        'Producto apto para el lavavajillas.',
        'Tapón de alta presión',
        'Capacidad: 1.2 lt',
        'Alto: 31 cm',
        'Largo: 11 cm',
        'Ancho: 10 cm',
      ]
    },
    {
      id: 'decision',
      nombre: 'Road To Decision',
      imagen: 'pomos/pomo1.webp',
      lineaslogo: 'lineaslogo/lineaslogo4.webp',
      precioOriginal: 200,
      precioOferta: 160,
      color: 'Cobre',
      descripcion: `
Si eliges este color, eliges valentía para elegir: es el camino de la claridad. El gráfico en este color comienza de un mismo START y se abre en dos trayectorias hacia END: decidir es dirigir energía, decir sí con intención y no sin culpa. Este color te recuerda que elegir te da dirección y tiempo. Entra al Jaque's Club y toma el volante en el Road to Decision.`,
      caracteristicas: [
        'Acero inoxidable 18/8; Libre de BPA.',
        'Incluye bombilla que puedes convertir en sorbete',
        'Aislamiento al vacío de doble pared.',
        'Mantiene tus líquidos fríos o calientes por 24 horas',
        'A prueba de fugas.',
        'Puedes usar la tapa como vaso fachero.',
        'Producto apto para el lavavajillas.',
        'Tapón de alta presión',
        'Capacidad: 1.2 lt',
        'Alto: 31 cm',
        'Largo: 11 cm',
        'Ancho: 10 cm',
      ]
    },
    {
      id: 'love',
      nombre: 'Road To Love',
      imagen: 'pomos/pomo4.webp',
      lineaslogo: 'lineaslogo/lineaslogo1.webp',
      precioOriginal: 200,
      precioOferta: 160,
      color: 'Rojo',
      descripcion: `
Si elegiste este color, elegiste cuidado verdadero: es el camino del amor bien practicado. El gráfico en este color traza una línea ascendente con un bache entre inicio y el final: los vínculos crecen con paciencia, presencia y
gratitud, incluso con altibajos. Este color te recuerda que quien se cuida, cuida mejor. Sé parte del Jaque's Club y vive el Road to Love.`,
      caracteristicas: [
        'Acero inoxidable 18/8; Libre de BPA.',
        'Incluye bombilla que puedes convertir en sorbete',
        'Aislamiento al vacío de doble pared.',
        'Mantiene tus líquidos fríos o calientes por 24 horas',
        'A prueba de fugas.',
        'Puedes usar la tapa como vaso fachero.',
        'Producto apto para el lavavajillas.',
        'Tapón de alta presión',
        'Capacidad: 1.2 lt',
        'Alto: 31 cm',
        'Largo: 11 cm',
        'Ancho: 10 cm',
      ]
    },
  ];

  getProductoById(id: string) {
    return this.productos.find(p => p.id === id);
  }
}
