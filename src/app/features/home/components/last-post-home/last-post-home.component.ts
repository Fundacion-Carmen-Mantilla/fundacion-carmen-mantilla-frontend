import {Component, OnInit} from '@angular/core';
import {AsyncPipe, DatePipe} from "@angular/common";
import {Observable, of} from 'rxjs';
import {Post} from '../../models/home.model';

@Component({
  selector: 'app-last-post-home',
  imports: [
    AsyncPipe,
    DatePipe
  ],
  templateUrl: './last-post-home.component.html',
  styleUrl: './last-post-home.component.css'
})
export class LastPostHomeComponent implements OnInit {
  ultimosPosts$: Observable<Post[]> | undefined;

  ngOnInit(): void {
    this.ultimosPosts$ = of([
      {
        id: 1,
        titulo: 'El Impacto de la Educación',
        resumen: 'Cómo la educación transforma comunidades vulnerables',
        imagen: 'https://picsum.photos/200/300?random=1',
        autor: 'Carmen Mantilla',
        fecha: new Date()
      },
      {
        id: 2,
        titulo: 'Empoderamiento de la Mujer',
        resumen: 'Historias de mujeres que han superado la adversidad',
        imagen: 'https://picsum.photos/200/300?random=2',
        autor: 'Laura García',
        fecha: new Date()
      },
      {
        id: 3,
        titulo: 'Innovación en la Educación',
        resumen: 'Nuevas tecnologías para mejorar la calidad educativa',
        imagen: 'https://picsum.photos/200/300?random=3',
        autor: 'Juan Pérez',
        fecha: new Date()
      }
    ]);
  }

  navigateToPost(postId: number): void {
    // Navegación a detalle de post
    // this.router.navigate(['/blog', postId]);
  }
}
