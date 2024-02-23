import { Component } from '@angular/core';

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [],
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.css'
})
export class EstadisticasComponent {
  isFollowing = false;
  seguidores = 123;
  seguidos = 33;
  publicaciones = 200;
}
