import { Component } from '@angular/core';

@Component({
  selector: 'app-infouser',
  standalone: true,
  imports: [],
  templateUrl: './infouser.component.html',
  styleUrl: './infouser.component.css'
})
export class InfouserComponent {
  nombre = "Rana Pepe";
  edad = 33;
  ubicacion = "Españita";
  descripcion = "Cuenta en decadencia";
}
