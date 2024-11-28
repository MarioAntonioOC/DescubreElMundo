import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from "../menu/menu.component"; // Importamos el componente del menú
import { isPlatformServer } from '@angular/common';


@Component({
  selector: 'app-puntos-interes',
  standalone: true,
  templateUrl: './puntos-interes.component.html',
  styleUrls: ['./puntos-interes.component.css'],
  imports: [CommonModule, MenuComponent] // Registramos el componente del menú como una dependencia
})
export class PuntosInteresComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: any) { }

  lugares = [
    {
      nombre: 'Torre Eiffel',
      descripcion: 'Un icónico monumento en París, Francia.',
      imagen: 'https://cdn-imgix.headout.com/media/images/c90f7eb7a5825e6f5e57a5a62d05399c-25058-BestofParis-EiffelTower-Cruise-Louvre-002.jpg?auto=format&w=1051.2&h=540&q=90&fit=fit',
      coordenadas: { lat: 48.890730, lng: 2.294550 }
    },
    {
      nombre: 'Estatua de la Libertad',
      descripcion: 'Símbolo de libertad en Nueva York, EE.UU.',
      imagen: 'https://media.admagazine.com/photos/6531e24db213103073ad3736/master/w_1600%2Cc_limit/estatua-de-la-libertad-en-ny.jpg',
      coordenadas: { lat: 40.748434, lng: -74.006689 }
    },
    {
      nombre: 'Gran Muralla China',
      descripcion: 'Una de las maravillas del mundo en China.',
      imagen: 'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/e0ba/live/a4463970-c4e3-11ee-be3f-71c082ac4827.jpg.webp',
      coordenadas: { lat: 40.431908, lng: 116.570373 }
    },
    {
      nombre: 'Taj Mahal',
      descripcion: 'Un mausoleo de mármol en la India.',
      imagen: 'https://s1.significados.com/foto/cultural-tourism-5264542-1920_bg.jpg?class=article',
      coordenadas: { lat: 27.175277, lng: 78.042128 }
    },
    {
      nombre: 'Coliseo Romano',
      descripcion: 'Un anfiteatro histórico en Roma, Italia.',
      imagen: 'https://marcelogardinetti.wordpress.com/wp-content/uploads/2023/10/coliseo-romano-c2a9yana-marudova.jpg',
      coordenadas: { lat: 41.890210, lng: 12.490020 }
    },
    {
      nombre: 'Machu Picchu',
      descripcion: 'Una antigua ciudadela inca en Perú.',
      imagen: 'https://caminoincamachupicchu.org/cmingutd/wp-content/uploads/2021/06/machu-picchu-llama.jpg',
      coordenadas: { lat: -13.163333, lng: -72.516667 }
    }
  ];

  ngAfterViewInit(): void {
    if (!isPlatformServer(this.platformId)) {
      this.solicitarUbicacion();
    }
  }

  solicitarUbicacion(): void {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          alert(`Tu ubicación actual es: \nLatitud: ${latitude}\nLongitud: ${longitude}`);
        },
        (error) => {
          alert('Error al obtener la ubicación actual');
        }
      );
    } else {
      alert('La geolocalización no está disponible en este dispositivo');
    }
  }

  abrirMapa(event: any, lugar: any) {
    console.log('Función abrirMapa llamada');
    event.preventDefault();
    const coordenadas = lugar.coordenadas;
    alert(`Coordenadas: ${coordenadas.lat}, ${coordenadas.lng}`);
  }
}