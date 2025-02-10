import {Component, OnInit} from '@angular/core';
import {AsyncPipe, DatePipe} from "@angular/common";
import {Observable, of} from 'rxjs';
import {Noticia} from '../../models/home.model';

@Component({
  selector: 'app-last-news-home',
  imports: [
    AsyncPipe,
    DatePipe
  ],
  templateUrl: './last-news-home.component.html',
  styleUrl: './last-news-home.component.css'
})
export class LastNewsHomeComponent implements OnInit {
  noticias$: Observable<Noticia[]> | undefined;

  ngOnInit(): void {
    this.noticias$ = of([
      {
        id: 1,
        titulo: 'Apoyo Educativo en El Banco',
        resumen: 'Inauguramos programa de becas para jóvenes estudiantes',
        imagen: 'https://picsum.photos/200/300?random=4',
        fecha: new Date()
      },
      {
        id: 2,
        titulo: 'Proyecto de Inclusión Social',
        resumen: 'Nuevas estrategias para empoderar comunidades',
        imagen: 'https://picsum.photos/200/300?random=5',
        fecha: new Date()
      },
      {
        id: 3,
        titulo: 'Educación en Tiempos de Pandemia',
        resumen: 'Cómo hemos adaptado nuestros programas educativos',
        imagen: 'https://picsum.photos/200/300?random=6',
        fecha: new Date()
      }
    ]);
  }

  navigateToNoticia(noticiaId: number): void {
    // Navegación a detalle de noticia
    // this.router.navigate(['/noticias', noticiaId]);
  }
}
